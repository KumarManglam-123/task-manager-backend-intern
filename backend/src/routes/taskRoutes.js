const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const {
  getTasks,
  createTask,
  deleteTask,
} = require("../controllers/taskController");

// Get all tasks
router.get("/", authMiddleware, getTasks);

// Create task
router.post("/", authMiddleware, createTask);

// Delete task
router.delete("/:id", authMiddleware, deleteTask);

module.exports = router;
