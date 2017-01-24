const password = require('../utils/password');

exports.seed = function(knex, Promise) {
  return knex('user').del()
    .then(() => {
      return knex.raw('ALTER SEQUENCE user_id_seq RESTART WITH 3')
    })
    .then(function () {
      return Promise.all([
        knex('user').insert({
          id: 1,
          email: 'jordan@example.com',
          password: password.hash('password123')
        }),
        knex('user').insert({
          id: 2,
          email: 'someone@example.com',
          password: password.hash('password2222')
        })
      ]);
    });
};
