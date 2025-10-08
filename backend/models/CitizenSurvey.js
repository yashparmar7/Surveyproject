const mongoose = require("mongoose");

const CitizenSurveySchema = new mongoose.Schema(
  {
    citizen: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Citizen",
      required: true,
    },
    surveyType: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SurveyType",
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    existingFlag: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("CitizenSurvey", CitizenSurveySchema);
