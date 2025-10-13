const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/User");
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

module.exports = { handleLoginController };
