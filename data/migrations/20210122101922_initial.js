
exports.up = function(knex) {
    return knex.schema
        .createTable('projects', table => {
            table.increments('id')
            table.text('project_name')
                .notNullable()
                .unique()
            table.text('project_description')
            table.boolean('project_completed')
                .notNullable()
                .defaultTo(false)
        })
        .createTable('resources', table => {
            table.increments('id')
            table.text('resource_name')
                .notNullable()
                .unique()
            table.text('resource_description')
        })
        .createTable('tasks', table => {
            table.increments('id')
            table.text('task_description')
                .notNullable()
            table.text('task_notes')
            table.boolean('task_completed')
                .notNullable()
                .defaultTo(false)
            table.integer('project_id')
                .notNullable()
                .references('id')
                .inTable('projects')
        })
        .createTable('project_resources', table => {
            table.integer('project_id')
                .notNullable()
                .references('id')
                .inTable('projects')
            table.integer('resource_id')
                .notNullable()
                .references('id')
                .inTable('resources')
            table.primary(['project_id', 'resource_id']);
        })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('project_resources')
        .dropTableIfExists('tasks')
        .dropTableIfExists('resources')
        .dropTableIfExists('projects')
};
