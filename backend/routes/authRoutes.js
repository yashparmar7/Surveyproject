const express = require("express");
const { handleLoginController } = require("../controllers/authController");
const { checkRole } = require("../middleware/checkRole");

const router = express.Router();

router.post("/login", handleLoginController);

module.exports = router;
