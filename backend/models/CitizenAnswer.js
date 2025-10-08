const mongoose = require("mongoose");

const CitizenAnswerSchema = new mongoose.Schema(
  {
    citizen: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Citizen",
      required: true,
    },
    qbDetail: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "QBDetail",
      required: true,
    },
    optionAnswer: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("CitizenAnswer", CitizenAnswerSchema);
