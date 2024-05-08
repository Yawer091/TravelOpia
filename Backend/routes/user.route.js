const express = require("express");
const userModel = require("../model/user.model");
const userRouter = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { auth } = require("../middleware/auth.middleware");
require("dotenv").config();

userRouter.get("/", auth, (req, res) => {
  res.send("Home");
});

userRouter.post("/register", async (req, res) => {
  const { fullName, email, password, phoneNumber, role } = req.body;
  try {
    const existingUser = await userModel.findOne({ email: email });
    if (existingUser) {
      return res.status(400).send({ msg: "User already exists!" });
    }
    const hash = await bcrypt.hash(password, 5);
    const user = new userModel({
      fullName,
      email,
      phoneNumber,
      password: hash,
      role,
    });
    await user.save();
    res.status(201).json({ msg: "User Registered" });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(404).json({ msg: "Unable to find USER" });
    }

    bcrypt.compare(password, user.password, (err, result) => {
      if (err) {
        return res.status(500).json({ msg: "Wrong Credentials" });
      }
      if (result) {
        const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY);
        res.status(200).json({ msg: "Login Successful", token, user });
      } else {
        res.status(401).json({ msg: "Invalid password" });
      }
    });
  } catch (err) {
    res.status(500).json({ msg: "Server err " });
  }
});

module.exports = {
  userRouter,
};
