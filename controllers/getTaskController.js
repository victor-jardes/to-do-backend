const getAllTasksService = require('../services/getAllTaskServices');

const getAllTasksController = async (_req, res) => {
  const callAllTaskService = await getAllTasksService();

  return res.status(200).json(callAllTaskService);
};

module.exports = getAllTasksController;
