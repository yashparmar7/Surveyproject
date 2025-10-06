const mongoose = require("mongoose");

const WardSchema = new mongoose.Schema(
  {
    wardname: { type: String, required: true },
    wardnumber: { type: Number },
    assembly: { type: mongoose.Schema.Types.ObjectId, ref: "Assembly" },
    corporation: { type: mongoose.Schema.Types.ObjectId, ref: "Corporation" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Ward", WardSchema);
