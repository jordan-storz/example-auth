
exports.up = function(knex, Promise) {
  return knex.schema.createTable('marker', function (table) {
    table.increments();
    table.string('color');
    table.string('quality');
    table.integer('user_id')
      .references('id').inTable('user')
      .onDelete('CASCADE');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('marker');
};
