const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true, unique: true },
    lastName: { type: String },
    email: { type: String, index: true },
    phone: { type: String },
    password: { type: String },
    loginMethod: {
      type: String,
      enum: ["password", "OTP"],
      default: "password",
    },
    passwordSet: { type: Boolean, default: false },
    passwordToken: { type: String },
    tokenExpires: { type: Date },
    role: { type: mongoose.Schema.Types.ObjectId, ref: "Role" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
