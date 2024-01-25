/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  await knex.schema
        .createTable('projects',table => {
            table.increments('project_id')
            table.string('project_name',200).notNullable()
            table.string('project_description',200)
            table.integer('project_completed').defaultTo(0)
            
        })
        .createTable('resource',table => {
            table.increments('resource_id')
            table.string('resource_name').notNullable().unique()
            table.string('resource_description')
        })
        .createTable('task',table => {
            table.increments()
        })
        .createTable('resource_assignment',table => {
            table.increments()
        })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  await knex.schema
  .dropTableIfExists('resource_assignment')
  .dropTableIfExists('task')
  .dropTableIfExists('resource')
  .dropTableIfExists('projects')
};
