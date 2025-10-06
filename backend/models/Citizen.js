const mongoose = require("mongoose");

const CitizenSchema = new mongoose.Schema(
  {
    citizenname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    gender: { type: String, enum: ["male", "female", "other"] },
    age: { type: Number, required: true },
    phone: { type: String },
    waphone: { type: String },
    ward: { type: mongoose.Schema.Types.ObjectId, ref: "Ward" },
    area: { type: mongoose.Schema.Types.ObjectId, ref: "Area" },
    block: { type: mongoose.Schema.Types.ObjectId, ref: "Block" },
    assembly: { type: mongoose.Schema.Types.ObjectId, ref: "Assembly" },
    corporation: { type: mongoose.Schema.Types.ObjectId, ref: "Corporation" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Citizen", CitizenSchema);
