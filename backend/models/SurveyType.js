const mongoose = require("mongoose");

const SurveyTypeSchema = new mongoose.Schema(
  {
    surveyTypeName: { type: String, required: true },
    description: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("SurveyType", SurveyTypeSchema);
