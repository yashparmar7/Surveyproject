const mongoose = require("mongoose");

const QBDetailSchema = new mongoose.Schema(
  {
    surveyTopic: { type: mongoose.Schema.Types.ObjectId, ref: "SurveyTopic" },
    surveyType: { type: mongoose.Schema.Types.ObjectId, ref: "SurveyType" },
    questionText: { type: String, required: true },
    questionType: { type: mongoose.Schema.Types.ObjectId, ref: "QuestionType" },
    questionOptions: { type: Array, required: true },
    qbCategory: { type: mongoose.Schema.Types.ObjectId, ref: "QBCategory" },
  },
  { timestamps: true }
);
