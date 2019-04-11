const db = require('../data/dbConfig.js');

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById,
};

function insert(user) {
  const [id] = await db('users').insert(user);

  return db('users')
    .where({ id })
    .first();
}

function getAll() {
  return db('users');
}

