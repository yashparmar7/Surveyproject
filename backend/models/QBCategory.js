const mongoose = require("mongoose");

const QBCategorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("QBCategory", QBCategorySchema);
