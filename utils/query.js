const db = require('../db');
const R = require('ramda');
const password = require('../utils/password');

module.exports = (function() {
  const relations = ['user', 'marker'];
  const queries = {
    all: (rel) => db(rel),
    one: (rel, id) => db(rel).where('id', id)
  }

  class Query {
    constructor(rel) {
      this.rel = rel;
    }

    all() {
      return db(this.rel);
    }

    one(id) {
      return db(this.rel).where('id', id).first();
    }

    by(field, val) {
      return db(this.rel).where(field, val).first();
    }

    add(info) {
      if (!info.password) {
        delete info.password;
        return db(this.rel).insert(info);
      } else {
        info.password = password.hash(info.password);
        return db(this.rel).insert(info);
      }
    }
  }

  const main = function (relation) {
    if (!R.contains(relation, relations)) {
      return Promise.reject(
        new Error('Query for a user or a marker!')
      )
    } else {
      return new Query(relation);
    }
  }

  return main;
}());
