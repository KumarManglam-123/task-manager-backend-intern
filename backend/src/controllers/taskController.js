const Task = require("../models/Task");

// Get all tasks
exports.getTasks = async (req, res) => {
  const tasks = await Task.find({ userId: req.user.id });
  res.json(tasks);
};

// Create task
exports.createTask = async (req, res) => {
  const task = await Task.create({
    title: req.body.title,
    userId: req.user.id,
  });
  res.status(201).json(task);
};

// Delete task
exports.deleteTask = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};
