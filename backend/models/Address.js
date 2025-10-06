const mongoose = require("mongoose");

const AddressSchema = new mongoose.Schema(
  {
    doorNumber: { type: Number, required: true },
    floorNumber: { type: Number, required: true },
    streetName: { type: String },
    establishmentName: { type: String },
    citizenId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Citizen",
    },
    block: { type: mongoose.Schema.Types.ObjectId, ref: "Block" },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    area: { type: mongoose.Schema.Types.ObjectId, ref: "Area" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Address", AddressSchema);
