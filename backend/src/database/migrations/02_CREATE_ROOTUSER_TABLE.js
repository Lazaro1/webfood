exports.up = function(knex) {
  return knex('users').insert({
      name: 'root',
      username: 'root',
      email: 'root',
      password: 'root'
  });
};

exports.down = function(knex) {
  return knex('users').del();
};