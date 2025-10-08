const crypto = require("crypto");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const twilio = require("twilio");
const User = require("../models/User");

require("dotenv").config();
const CLIENT_URL = process.env.CLIENT_URL || "http://localhost:5173";

// const twilioClient = twilio(
//   process.env.TWILIO_ACCOUNT_SID,
//   process.env.TWILIO_AUTH_TOKEN
// );

const generateToken = () => {
  const token = crypto.randomBytes(32).toString("hex");
  const tokenHash = crypto.createHash("sha256").update(token).digest("hex");
  return { token, tokenHash };
};

const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const createUser = async (req, res) => {
  try {
    const { firstName, lastName, email, phone, role } = req.body;

    if (!firstName || !email || !phone) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const existing = await User.findOne({ $or: [{ email }, { phone }] });
    if (existing) {
      return res.status(400).json({ message: "User already exists" });
    }

    const { token, tokenHash } = generateToken();
    const tokenExpires = Date.now() + 24 * 60 * 60 * 1000; // 24 hours

    const user = await User.create({
      firstName,
      lastName,
      email,
      phone,
      role,
      passwordToken: tokenHash,
      tokenExpires,
    });

    const setPasswordLink = `${CLIENT_URL}/set-password?token=${token}`;

    await transporter.sendMail({
      from: `"Survey Portal" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Set Your Password - D2D Survey",
      html: `
        <h3>Welcome, ${firstName} ${lastName}!</h3>
        <p>You’ve been invited to the D2D Survey platform.</p>
        <p>Please click the link below to set your password (valid for 24 hours):</p>
        <a href="${setPasswordLink}" target="_blank">${setPasswordLink}</a>
        <p>Thank you,<br/>D2D Survey Team</p>
      `,
    });

    console.log(`Email sent to ${email}`);

    // await twilioClient.messages.create({
    //   from: process.env.TWILIO_WHATSAPP_NUMBER,
    //   to: `whatsapp:+91${phone}`,
    //   body: `Hi ${firstName}! Set your D2D Survey password here: ${setPasswordLink} (valid for 24 hours)`,
    // });

    // console.log(`WhatsApp invite sent to ${phone}`);

    res.status(201).json({
      message: "User created. Invite link sent via Email.",
    });
  } catch (err) {
    console.error("Error in register:", err.message);
    res.status(500).json({ message: "Server error while sending invite" });
  }
};

const setPassword = async (req, res) => {
  try {
    const { token, password } = req.body;
    const tokenHash = crypto.createHash("sha256").update(token).digest("hex");

    const user = await User.findOne({
      passwordToken: tokenHash,
      tokenExpires: { $gt: Date.now() },
    });

    if (!user)
      return res.status(400).json({ message: "Invalid or expired token" });

    user.password = await bcrypt.hash(password, 10);
    user.passwordSet = true;
    user.passwordToken = undefined;
    user.tokenExpires = undefined;

    await user.save();
    res.json({ message: "Password set successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { createUser, setPassword };
