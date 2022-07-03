const express = require('express');
const insertTaskController = require('../controllers/insertTaskController');

const insertRouter = express.Router();

insertRouter.post('/tasks', insertTaskController);

module.exports = insertRouter;
