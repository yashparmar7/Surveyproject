const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true, unique: true },
    lastName: { type: String },
    email: { type: String, index: true },
    status: { type: String, enum: ["active", "inactive"], default: "active" },
    phone: { type: String },
    role: { type: mongoose.Schema.Types.ObjectId, ref: "Role" },
    designation: { type: mongoose.Schema.Types.ObjectId, ref: "Designation" },
    area: { type: mongoose.Schema.Types.ObjectId, ref: "Area" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
