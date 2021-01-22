
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        { task_description: 'Read book', task_notes: 'Read it all', project_id: 1, task_completed: false },
        { task_description: 'Write paper', task_notes: 'Write it all', project_id: 2, task_completed: true },
        { task_description: 'Clean room', task_notes: 'Clean it all', project_id: 1, task_completed: false },
      ]);
    });
};
