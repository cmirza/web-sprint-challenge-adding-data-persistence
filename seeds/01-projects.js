
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { project_name: 'Project 1', project_description: 'Read books', project_completed: false },
        { project_name: 'Project 2', project_description: 'Write paper', project_completed: true },
        { project_name: 'Project 3', project_description: 'Organize things', project_completed: false },
      ]);
    });
};
