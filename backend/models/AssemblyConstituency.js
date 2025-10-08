const mongoose = require("mongoose");

const AssemblyConstituencySchema = new mongoose.Schema(
  {
    assemblyName: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "AssemblyConstituency",
  AssemblyConstituencySchema
);
