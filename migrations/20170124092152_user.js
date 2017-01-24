
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user', function(table) {
    table.increments();
    table.string('email').unique();
    table.string('password').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.raw('DROP TABLE IF EXISTS "user" CASCADE');
};
