const mongoose = require("mongoose");

const WardSchema = new mongoose.Schema(
  {
    oldName: { type: String, required: true },
    oldNumber: { type: Number, required: true },
    newName: { type: String, required: true },
    newNumber: { type: Number },
    assembly: { type: mongoose.Schema.Types.ObjectId, ref: "Assembly" },
    corporation: { type: mongoose.Schema.Types.ObjectId, ref: "Corporation" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Ward", WardSchema);
