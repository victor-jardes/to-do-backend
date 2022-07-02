const getAllTasksService = require('../services/getAllTaskServices');

const getAllTasksController = async (_req, res) => {
  try {
    const callAllTaskService = await getAllTasksService();

    return res.status(200).json(callAllTaskService);
  } catch (error) {
    throw new Error({ message: 'error when calling Service' });
  }
};

module.exports = getAllTasksController;
