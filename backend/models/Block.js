const mongoose = require("mongoose");

const BlockSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    type: { type: mongoose.Schema.Types.ObjectId, ref: "BlockType" },
    area: { type: mongoose.Schema.Types.ObjectId, ref: "Area" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Block", BlockSchema);
