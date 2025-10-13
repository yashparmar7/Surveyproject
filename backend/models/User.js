const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String },
    email: { type: String, required: true, unique: true, index: true },
    phone: { type: String, required: true, unique: true },
    password: { type: String },
    loginMethod: {
      type: String,
      enum: ["password", "OTP"],
      default: "password",
    },
    passwordSet: { type: Boolean, default: false },
    passwordToken: { type: String },
    tokenExpires: { type: Date },

    role: { type: mongoose.Schema.Types.ObjectId, ref: "Role", required: true },
  },
  { timestamps: true }
);

UserSchema.pre("save", async function (next) {
  if (!this.role) {
    const Role = mongoose.model("Role");
    const defaultRole = await Role.findOne({ roleName: "Volunteer" });
    this.role = defaultRole?._id;
  }
  next();
});

module.exports = mongoose.model("User", UserSchema);
