const mongoose = require("mongoose");

const CorporationSchema = new mongoose.Schema(
  {
    corporationName: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Corporation", CorporationSchema);
