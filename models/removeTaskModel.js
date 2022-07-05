const connection = require('./connection');

const removeTaskModel = async (id) => {
  try {
    await connection.execute(
      'DELETE FROM Task.To_do WHERE id = ?;',
      [id],
    );
  } catch (error) {
    throw new Error('Erro when delete task model');
  }
};

module.exports = removeTaskModel;
