const bcrypt = require('bcrypt');

module.exports = (function() {
  'use strict';
  const saltRounds = 10;
  const hash = password => {
    return bcrypt.hashSync(password, saltRounds);
  }
  const compare = (pass, hash) => {
    return bcrypt.compareSync(pass, hash);
  }

  return {
    hash,
    compare
  }
}());
