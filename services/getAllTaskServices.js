const getAllTasksModel = require('../models/getAllTaskModel');

const getAllTasksService = async () => {
  try {
    const callingModelforFindAllTasksInDB = await getAllTasksModel();

    return callingModelforFindAllTasksInDB;
  } catch (error) {
    throw new Error({ message: 'error when calling model' });
  }
};

module.exports = getAllTasksService;
