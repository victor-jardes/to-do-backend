const insertTaskModel = require('../models/insertTaskModel');

const insertTaskService = async (work) => {
  try {
    await insertTaskModel(work);
  } catch (error) {
    throw new Error(
      'error when calling model for insert values in DB',
    );
  }
};

module.exports = insertTaskService;
