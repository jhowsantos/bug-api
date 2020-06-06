import Knex from 'knex'

export async function up(knex: Knex){
  return knex.schema.createTable('bugs', table => {
    table.increments('id').primary();
    table.string('title').notNullable();
    table.string('description').notNullable();
    table.string('reporter').notNullable();
    table.string('status').notNullable();
  })
}

export async function down(knex: Knex){
  return knex.schema.dropTable('bugs');
}