const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    fullName: { type: String },
    email: { type: String, index: true },
    phone: { type: String },
    role: { type: mongoose.Schema.Types.ObjectId, ref: "Role" },
    designation: { type: mongoose.Schema.Types.ObjectId, ref: "Designation" },
    area: { type: mongoose.Schema.Types.ObjectId, ref: "Area" },
    // ward: { type: mongoose.Schema.Types.ObjectId, ref: "Ward" },
    // block: { type: mongoose.Schema.Types.ObjectId, ref: "Block" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
