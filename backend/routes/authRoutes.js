const express = require("express");
const {
  handleLoginController,
  sendOTPController,
  verifyOTPController,
} = require("../controllers/authController");

const router = express.Router();

router.post("/login", handleLoginController);

router.post("/send-otp", sendOTPController);

router.post("/verify-otp", verifyOTPController);

module.exports = router;
