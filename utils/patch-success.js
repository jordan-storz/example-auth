const R = require('ramda');

const message = {msg: 'Record updated successfully!'};
module.exports = (obj) => R.merge(message, obj);
