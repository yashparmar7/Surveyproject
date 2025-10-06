const mongoose = require("mongoose");

const BlockTypeSchema = new mongoose.Schema(
  {
    blocktypename: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("BlockType", BlockTypeSchema);
