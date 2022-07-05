const removeTaskService = require('../services/removeTaskService');

const removeTaskController = async (req, res) => {
  try {
    const { id } = req.params;
    await removeTaskService(id);
    res.status(204).end();
  } catch (error) {
    throw new Error('error whe calling service in Controller');
  }
};

module.exports = removeTaskController;
