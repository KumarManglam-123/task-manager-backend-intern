const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");
const adminController = require("../controllers/adminController");

// Admin only route
router.get(
  "/",
  authMiddleware,
  roleMiddleware("admin"),
  adminController.getAdminData
);

module.exports = router;
