const express = require("express");
const {
  createUser,
  setPassword,
} = require("../controllers/createUserControllers");

const router = express.Router();

router.post("/create-user", createUser);
router.post("/set-password", setPassword);

module.exports = router;
