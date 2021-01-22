// build your `Task` model here
const db = require('../../data/dbConfig');

module.exports = { find, add, findById };

function find() {
    return db('tasks');
}

function findById(id) {
    return db('tasks').where('id', id).first();
}

function add(task) {
    return db.insert(task).into('tasks');
}