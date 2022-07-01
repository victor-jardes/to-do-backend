const getAllTasksModel = require('../models/getAllTaskModel');

const getAllTasksService = async () => {
  const callingModelforFindAllTasksInDB = await getAllTasksModel();
  return callingModelforFindAllTasksInDB;
};

module.exports = getAllTasksService;
