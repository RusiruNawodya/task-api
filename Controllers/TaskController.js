const Task = require('../Models/Task');


// Create a new task
exports.createTask = async (req, res, next) => {
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
