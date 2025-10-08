const mongoose = require("mongoose");

const AreaSchema = new mongoose.Schema(
  {
    areaName: { type: String, required: true },
    description: { type: String },
    ward: { type: mongoose.Schema.Types.ObjectId, ref: "Ward" },
    assembly: { type: mongoose.Schema.Types.ObjectId, ref: "Assembly" },
    corporation: { type: mongoose.Schema.Types.ObjectId, ref: "Corporation" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Area", AreaSchema);
