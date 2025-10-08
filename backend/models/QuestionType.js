const mongoose = require("mongoose");

const QuestionTypeSchema = new mongoose.Schema(
  {
    questionTypeName: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("QuestionType", QuestionTypeSchema);
