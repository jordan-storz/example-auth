const environment = process.env.NODE || 'development';
const config = require('./knexfile')[environment];

module.exports = require('knex')(config);
