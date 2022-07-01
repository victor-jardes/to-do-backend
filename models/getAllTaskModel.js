const connection = require('./connection');

const getAllTasksModel = async () => {
  const [allTask] = await connection.execute(
    'SELECT id, work, status FROM Task.To_do;',
  );
  return allTask;
};

module.exports = getAllTasksModel;
