const express = require('express');
const getAllTaskController = require('../controllers/getAllTasksController');

const getAllTasksRouter = express.Router();

getAllTasksRouter.get('/tasks', getAllTaskController);

module.exports = getAllTasksRouter;
