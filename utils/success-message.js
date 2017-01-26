const R = require('ramda');

const patchMessage = {msg: 'Record updated successfully!'};
const postMessage  = {msg: 'Record created successfully!'};
module.exports = {
  patch: (obj) => R.merge(patchMessage, obj),
  post: (obj) => R.merge(postMessage, obj)
};
