const express = require('express');
const removeTaskController = require('../controllers/removeTaskController');

const removeTaskRouter = express.Router();

removeTaskRouter.delete('/tasks/:id', removeTaskController);

module.exports = removeTaskRouter;
