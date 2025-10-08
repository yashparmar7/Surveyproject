const mongoose = require("mongoose");

const SurveyTopicSchema = new mongoose.Schema(
  {
    surveyTopicName: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("SurveyTopic", SurveyTopicSchema);
