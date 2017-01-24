
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('marker').del()
    .then(() => {
      return knex.raw('ALTER SEQUENCE marker_id_seq RESTART WITH 3')
    })
    .then(function () {
      return Promise.all([
        knex('marker').insert({
          id: 1,
          color: 'blue',
          quality: 'great',
          user_id: 1
        }),
        knex('marker').insert({
          id: 2,
          color: 'brown',
          quality: 'not bad',
          user_id: 1
        }),
        knex('marker').insert({
          id: 3,
          color: 'red',
          quality: 'good',
          user_id: 1
        }),
        knex('marker').insert({
          id: 4,
          color: 'green',
          quality: 'excellent',
          user_id: 1
        }),
        knex('marker').insert({
          id: 5,
          color: 'orange',
          quality: 'superb',
          user_id: 1
        }),
        knex('marker').insert({
          id: 6,
          color: 'purple',
          quality: 'poor',
          user_id: 2
        }),
      ]);
    });
};
