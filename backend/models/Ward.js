const mongoose = require("mongoose");

const WardSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    assembly: { type: mongoose.Schema.Types.ObjectId, ref: "Assembly" },
    corporation: { type: mongoose.Schema.Types.ObjectId, ref: "Corporation" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Ward", WardSchema);
