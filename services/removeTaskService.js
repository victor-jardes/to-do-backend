const removeTaskModel = require('../models/removeTaskModel');

const removeTaskService = async (id) => {
  try {
    await removeTaskModel(id);
  } catch (error) {
    throw new Error('error when calling model in service');
  }
};

module.exports = removeTaskService;
