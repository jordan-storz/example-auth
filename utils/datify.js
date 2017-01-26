const R = require('ramda');

module.exports = (info) => {
  return R.assoc('data', info, {});
}
