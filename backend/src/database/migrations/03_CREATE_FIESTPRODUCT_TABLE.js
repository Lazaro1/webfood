exports.up = function(knex) {
  return knex('products').insert({
      name: 'X-Tudo',
      description: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged',
      price: '15,00',
      url: 'https://s2.glbimg.com/xFrNoGEhRIc3Wg8A4U2nYAOiD0w=/620x620/e.glbimg.com/og/ed/f/original/2020/07/14/heavy_chicken.jpg'
  });
};

exports.down = function(knex) {
  return knex('products').del();
};