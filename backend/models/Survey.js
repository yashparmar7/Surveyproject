const mongoose = require("mongoose");

const SurveySchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    qbCategory: { type: mongoose.Schema.Types.ObjectId, ref: "QBCategory" },
    description: { type: String },
    questions: [
      {
        // optional embedded question definitions
        key: String,
        label: String,
        type: String, // "text", "number", "choice", etc.
        options: [String],
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Survey", SurveySchema);
