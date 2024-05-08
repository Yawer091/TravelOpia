const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    role: { type: String, enum: ["admin", "user"], default: "user" },
  },
  { versionKey: false }
);

const userModel = mongoose.model("user", userSchema);
module.exports = userModel;
