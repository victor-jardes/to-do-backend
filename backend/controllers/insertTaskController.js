const insertTaskService = require('../services/insertTaskService');

const insertTaskController = async (req, res) => {
  try {
    const { work } = req.body;
    await insertTaskService(work);

    return res.status(200).json({ message: 'ok' });
  } catch (error) {
    console.log(error.message)
    throw new Error('error in controller');
  }
};

module.exports = insertTaskController;
