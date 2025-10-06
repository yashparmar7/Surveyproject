const mongoose = require("mongoose");

const AssemblySchema = new mongoose.Schema(
  {
    assemblyname: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Assembly", AssemblySchema);
