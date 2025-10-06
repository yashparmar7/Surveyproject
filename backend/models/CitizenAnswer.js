const mongoose = require("mongoose");

const CitizenAnswerSchema = new mongoose.Schema(
  {
    citizen: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Citizen",
      required: true,
    },
    survey: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Survey",
      required: true,
    },
    answers: { type: Object },
    answeredBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    answeredAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

module.exports = mongoose.model("CitizenAnswer", CitizenAnswerSchema);
