const connection = require('./connection');

const insertTaskModel = async (work) => {
  try {
    await connection.execute(
      'INSERT INTO Task.To_do (work, status) VALUES (?, "pendente");',
      [work],
    );
  } catch (error) {
    throw new Error('values not inserted');
  }
};

module.exports = insertTaskModel;
