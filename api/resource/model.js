// build your `Resource` model here
const db = require('../../data/dbConfig');

module.exports = { find, add, findById };

function find() {
    return db('resources');
}

function findById(id) {
    return db('resources').where('id', id).first();
}

function add(resource) {
    return db.insert(resource).into('resources');
}