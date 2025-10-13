const User = require("../models/User");

const checkRole = (allowedRoles = []) => {
  return async (req, res, next) => {
    try {
      const user = await User.findById(req.user._id).populate("role");

      if (!user) return res.status(401).json({ message: "User not found" });

      if (!allowedRoles.includes(user.role.roleName)) {
        return res.status(403).json({ message: "Access denied" });
      }

      next();
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    }
  };
};

module.exports = checkRole;
