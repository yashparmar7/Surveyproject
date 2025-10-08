const mongoose = require("mongoose");

const QBCategorySchema = new mongoose.Schema(
  {
    qbCategoryName: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("QBCategory", QBCategorySchema);
