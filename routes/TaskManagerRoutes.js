const express = require('express');
const router = express.Router();
const {
    GetAllTask,
    GetTaskByID,
    CreateNewTask,
    UpdateTaskByID,
    DeleteTaskByID
} = require('../Controllers/TaskController');

// GET /tasks - Get all tasks
router.get('/', GetAllTask);

// GET /tasks/:id - Get task by ID
router.get('/:id', GetTaskByID);

// POST /tasks - Create a new task
router.post('/', CreateNewTask);

// PUT /tasks/:id - Update task by ID
router.put('/:id', UpdateTaskByID);

// DELETE /tasks/:id - Delete task by ID
router.delete('/:id', DeleteTaskByID);

module.exports = router;
