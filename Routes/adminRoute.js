const express = require("express");
const router = express.Router();
const { auth, isAdmin, authorizeRoles } = require("../Middlewares/Auth.js");

router.get("/admin/dashboard", auth, isAdmin, (req, res) => {
  res.json({ message: "Welcome to the Admin Dashboard" });
});

// router.get("/admin/settings", auth, authorizeRoles("admin"), (req, res) => {
//   res.json({ message: "Admin Settings Page" });
// });

module.exports = router;