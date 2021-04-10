exports.up = function (knex) {
  return knex.schema.createTable('products', function (table) {
    table.increments();
    table.string('name');
    table.string('description');
    table.string('price');
    table.string('url');
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('products');
};