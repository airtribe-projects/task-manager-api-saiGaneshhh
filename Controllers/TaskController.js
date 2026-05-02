const fs = require('fs');

// Load initial tasks from task.json
let tasks = JSON.parse(fs.readFileSync('./task.json')).tasks;

function GetAllTask(req, res) {
    res.json(tasks);
}

function GetTaskByID(req, res) {
    const id = parseInt(req.params.id);
    const task = tasks.find(t => t.id === id);
    if (task) {
        res.json(task);
    } else {
        res.status(404).json({ message: 'Task not found' });
    }
}

function CreateNewTask(req, res) {
    const newTask = {
        id: tasks.length + 1,
        title: req.body.title,
        description: req.body.description,
        completed: req.body.completed || false
    };
    tasks.push(newTask);
    res.status(201).json(newTask);
}

function UpdateTaskByID(req, res) {
    const id = parseInt(req.params.id);
    const taskIndex = tasks.findIndex(t => t.id === id);
    if (taskIndex !== -1) {
        tasks[taskIndex] = { ...tasks[taskIndex], ...req.body };
        res.json(tasks[taskIndex]);
    } else {
        res.status(404).json({ message: 'Task not found' });
    }
}

function DeleteTaskByID(req, res) {
    const id = parseInt(req.params.id);
    const taskIndex = tasks.findIndex(t => t.id === id);
    if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1);
        res.status(204).send();
    } else {
        res.status(404).json({ message: 'Task not found' });
    }
}

module.exports = {
    GetAllTask,
    GetTaskByID,
    CreateNewTask,
    UpdateTaskByID,
    DeleteTaskByID
};

