const mongoose = require("mongoose");
const tourSchema = new mongoose.Schema(
  {
    userId: { type: String },
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    destination: { type: String, required: true },
    duration: { type: Number, required: true },
    intrest: { type: String, required: true },
    travelDate: { type: Date, required: true },
    numberOfTravelers: { type: Number, required: true },
    comment: { type: String },
  },
  { timestamps: true, versionKey: false }
);

const tourModel = mongoose.model("tour", tourSchema);
module.exports = tourModel;
