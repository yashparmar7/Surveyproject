const mongoose = require("mongoose");

const DesignationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Designation", DesignationSchema);
