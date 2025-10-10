const crypto = require("crypto");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const axios = require("axios");
const Role = require("../models/Role");
const User = require("../models/User");

require("dotenv").config();
const CLIENT_URL = process.env.CLIENT_URL || "http://localhost:5173";

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
    const { firstName, lastName, email, phone, role: inputRole } = req.body;

    if (!firstName || !email || !phone) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const existing = await User.findOne({ $or: [{ email }, { phone }] });
    if (existing) {
      return res.status(400).json({ message: "Email or phone already exists" });
    }

    let assignedRole;
    if (inputRole) {
      assignedRole = await Role.findOne({ _id: inputRole });
      if (!assignedRole) {
        return res.status(400).json({ message: "Invalid role provided" });
      }
    } else {
      assignedRole = await Role.findOne({ roleName: "Volunteer" });
      if (!assignedRole) {
        assignedRole = await Role.create({
          roleName: "Volunteer",
        });
      }
    }

    const { token, tokenHash } = generateToken();
    const tokenExpires = Date.now() + 24 * 60 * 60 * 1000; // 24 hours

    const user = await User.create({
      firstName,
      lastName,
      email,
      phone,
      role: assignedRole._id, // store role id
      passwordToken: tokenHash,
      tokenExpires,
    });

    const setPasswordLink = `${CLIENT_URL}/set-password?token=${token}`;

    await transporter.sendMail({
      from: `"Survey Portal" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Set Your Password - D2D Survey",
      html: `
    <div style="font-family: Arial, sans-serif; background-color: #f6f9fc; padding: 40px 0;">
      <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
        
          <div style="background-color: #007bff; color: #ffffff; padding: 20px 30px; text-align: center;">
          <h2 style="margin: 0; font-size: 22px;">D2D Survey Portal</h2>
        </div>

        <div style="padding: 30px;">
          <h3 style="color: #333333;">Welcome, ${firstName} ${lastName}!</h3>
          <p style="font-size: 16px; color: #555555; line-height: 1.6;">
            You’ve been invited to join the <strong>D2D Survey Platform</strong>.
          </p>
          <p style="font-size: 16px; color: #555555; line-height: 1.6;">
            Please click the button below to set your password. This link is valid for <strong>24 hours</strong>.
          </p>

          <div style="text-align: center; margin: 30px 0;">
            <a href="${setPasswordLink}" target="_blank"
              style="background-color: #007bff; color: #ffffff; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-weight: bold; display: inline-block;">
              Set Your Password
            </a>
          </div>

          <p style="font-size: 14px; color: #888888; text-align: center;">
            Or copy and paste this link into your browser:
            <br/>
            <a href="${setPasswordLink}" target="_blank" style="color: #007bff;">${setPasswordLink}</a>
          </p>

          <p style="font-size: 15px; color: #555555; line-height: 1.6; margin-top: 30px;">
            Thank you,<br/>
            <strong>D2D Survey Team</strong>
          </p>
        </div>

        <div style="background-color: #f1f1f1; text-align: center; padding: 15px; font-size: 12px; color: #888888;">
          © ${new Date().getFullYear()} D2D Survey. All rights reserved.
        </div>
      </div>
    </div>
  `,
    });

    res.status(201).json({
      message: "User created. Invite link sent via Email",
      user,
    });
  } catch (err) {
    console.error("Error in createUser:", err.message);
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
    console.error("Error in setPassword:", err.message);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { createUser, setPassword };
