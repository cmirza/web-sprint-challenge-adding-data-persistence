
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        { resource_name: 'paper', resource_description: 'lined paper' },
        { resource_name: 'pen', resource_description: 'black ink' },
        { resource_name: 'book', resource_description: 'thick book' },
      ]);
    });
};
