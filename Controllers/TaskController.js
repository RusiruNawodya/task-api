const Task = require('../Models/Task');


// Create a new task
const createTask = async (req, res, next) => {
try {
const { title, description, status } = req.body;


if (!title || title.trim() === '') {
return res.status(400).json({ error: 'Title is required' });
}


if (status && !['pending', 'in-progress', 'completed'].includes(status)) {
return res.status(400).json({ error: 'Invalid status value' });
}


const newTask = new Task({ title, description, status });
const savedTask = await newTask.save();
res.status(201).json(savedTask);
} catch (err) {
next(err);
}
};

// Get all tasks
const getTasks = async (req, res, next) => {
try {
const tasks = await Task.find().sort({ createdAt: -1 });
res.json(tasks);
} catch (err) {
next(err);
}
};

// Get a task by ID
const getTaskById = async (req, res, next) => {
try {
const { id } = req.params;
const task = await Task.findById(id);
if (!task) return res.status(404).json({ error: 'Task not found' });
res.json(task);
} catch (err) {
next(err);
}
};

// Delete a task by ID
const deleteTask = async (req, res, next) => {
try {
const { id } = req.params;
const task = await Task.findByIdAndDelete(id);
if (!task) return res.status(404).json({ error: 'Task not found' });
res.json({ message: 'Task deleted successfully' });
} catch (err) {
next(err);
}
};

module.exports = {
    createTask,
    getTasks,
    getTaskById,
    deleteTask
}