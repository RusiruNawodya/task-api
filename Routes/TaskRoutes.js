const express = require('express');
const router = express.Router();
const taskController = require('../Controllers/TaskController');


router.post('/', taskController.createTask);
router.get('/', taskController.getTasks);
router.get('/:id', taskController.getTaskById);
router.delete('/:id', taskController.deleteTask);


module.exports = router;