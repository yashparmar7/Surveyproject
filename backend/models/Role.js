const mongoose = require("mongoose");

const RoleSchema = new mongoose.Schema(
  {
    roleName: { type: String, required: true, unique: true },
    status: { type: String, enum: ["active", "inactive"], default: "active" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Role", RoleSchema);
