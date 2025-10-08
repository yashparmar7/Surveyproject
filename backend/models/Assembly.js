const mongoose = require("mongoose");

const AssemblySchema = new mongoose.Schema(
  {
    assemblyName: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Assembly", AssemblySchema);
