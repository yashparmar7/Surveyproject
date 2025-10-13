const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const axios = require("axios");
const secretKey = process.env.JWT_SECRET_KEY;

const handleLoginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const user = await User.findOne({
      email: email.toLowerCase(),
      passwordSet: true,
    }).populate("role");

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id }, secretKey, { expiresIn: "1h" });

    res.json({ token, user });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Server error in login controller",
      stack: err.stack,
    });
  }
};

const FAST2SMS_KEY = process.env.FAST2SMS_KEY;
const otpStore = {};

const sendOTPController = async (req, res) => {
  const { loginID } = req.body;

  try {
    const user =
      (await User.findOne({ email: loginID })) ||
      (await User.findOne({ phone: loginID }));

    if (!user) return res.status(404).json({ message: "User not found" });

    if (!user.phone || !/^[6-9]\d{9}$/.test(user.phone)) {
      return res.status(400).json({ message: "Invalid phone number" });
    }

    // Generate OTP
    const otp = Math.floor(100000 + Math.random() * 900000);
    otpStore[loginID] = { otp, expiresAt: Date.now() + 5 * 60 * 1000 };

    // SMS text
    const message = `Your OTP for login is ${otp}. It will expire in 5 minutes.`;

    // Send OTP via Fast2SMS
    const response = await axios.post(
      "https://www.fast2sms.com/dev/bulkV2",
      {
        route: "v3",
        sender_id: "FSTSMS",
        message,
        language: "english",
        numbers: user.phone,
      },
      {
        headers: {
          authorization: FAST2SMS_KEY,
          "Content-Type": "application/json",
        },
      }
    );

    if (response.data.return === true) {
      return res.status(200).json({
        success: true,
        message: "OTP sent successfully",
      });
    } else {
      console.error("Fast2SMS error:", response.data);
      return res.status(400).json({
        success: false,
        message: "Failed to send OTP",
        details: response.data,
      });
    }
  } catch (err) {
    console.error("OTP Send Error:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

const verifyOTPController = async (req, res) => {
  const { loginID, otp } = req.body;
  const stored = otpStore[loginID];

  if (!stored) return res.status(400).json({ message: "OTP not found" });

  if (stored.expiresAt <= Date.now()) {
    delete otpStore[loginID];
    return res.status(400).json({ message: "OTP expired" });
  }

  if (stored.otp == otp) {
    delete otpStore[loginID];

    // ✅ Find user
    const user =
      (await User.findOne({ email: loginID }).populate("role")) ||
      (await User.findOne({ phone: loginID }).populate("role"));

    if (!user) return res.status(404).json({ message: "User not found" });

    // ✅ Generate token
    const token = jwt.sign({ id: user._id }, secretKey, { expiresIn: "1h" });

    return res.status(200).json({
      message: "OTP verified successfully",
      token,
      user,
    });
  }

  return res.status(400).json({ message: "Invalid OTP" });
};

module.exports = {
  handleLoginController,
  sendOTPController,
  verifyOTPController,
};
