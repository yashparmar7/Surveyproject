const mongoose = require("mongoose");

const BlockSchema = new mongoose.Schema(
  {
    blockname: { type: String, required: true },
    description: { type: String },
    pincode: { type: number, required: true },
    type: { type: mongoose.Schema.Types.ObjectId, ref: "BlockType" },
    area: { type: mongoose.Schema.Types.ObjectId, ref: "Area" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Block", BlockSchema);
