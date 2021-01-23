// build your `Task` model here
const db = require('../../data/dbConfig');

module.exports = { find, add, findById };

function find() {
    return db('tasks as t')
        .join('projects as p', 't.project_id', 'p.id')
        .select('t.id', 't.task_description', 't.task_notes', 't.task_completed', 'p.project_name', 'p.project_description');
}

function findById(id) {
    return db('tasks').where('id', id).first();
}

function add(task) {
    return db.insert(task).into('tasks');
}