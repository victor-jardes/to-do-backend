const connection = require('./connection');

const getAllTasksModel = async () => {
  try {
    const [allTask] = await connection.execute(
      'SELECT id, work, status FROM Task.To_do;',
    );
    return allTask;
  } catch (error) {
    throw new Error({ message: 'error when calling DB' });
  }
};

module.exports = getAllTasksModel;
