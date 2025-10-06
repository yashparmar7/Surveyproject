const mongoose = require("mongoose");

const AreaSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    ward: { type: mongoose.Schema.Types.ObjectId, ref: "Ward" },
    description: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Area", AreaSchema);
