const mongoose = require("mongoose");

const CitizenSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    gender: { type: String, enum: ["male", "female", "other"] },
    age: { type: Number, required: true },
    phone: { type: String },
    waPhone: { type: String },
    waFlag: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Citizen", CitizenSchema);
