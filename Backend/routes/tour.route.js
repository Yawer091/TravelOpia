const express = require("express");
const { auth } = require("../middleware/auth.middleware");
const { getaccess } = require("../middleware/access.middleware");
const tourModel = require("../model/tour.model");
const tourRouter = express.Router();

tourRouter.get("/tour", auth, getaccess("admin"), async (req, res) => {
  try {
    const tours = await tourModel.find();
    if (!tours.length) {
      return res.status(404).json({ msg: "No Tours found" });
    }
    res.status(200).json(tours);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

tourRouter.get(
  "/tour/:id",
  auth,
  getaccess("admin", "user"),
  async (req, res) => {
    let { id } = req.params;
    try {
      const tourData = await tourModel.find({ userId: id });
      if (!tourData.length) {
        return res.status(404).json({ msg: `No tours present for ID ${id}` });
      }
      res.status(200).json(tourData);
    } catch (err) {
      res.status(500).json({ msg: err });
    }
  }
);

tourRouter.post("/tour", auth, getaccess("user"), async (req, res) => {
  const tourData = { ...req.body, userId: req.user._id };
  try {
    const newTour = new tourModel(tourData);
    await newTour.save();
    res.status(201).json({ msg: "Tour Data submitted" });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
});

module.exports = {
  tourRouter,
};
