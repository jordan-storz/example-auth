const express = require('express');
const router = express.Router();
const query = require('../utils/query');
const queryError = require('../utils/query-error');
const R = require('ramda');
const password = require('../utils/password');
const authenticate = require('../utils/authenticate');

router.post('/login', function(req, res) {
  query('user')
    .by('email', req.body.email)
    .then(user => authenticate(user, req.body.password))
    .then(result => res.json(result))
    .catch(queryError(res));
});

module.exports = router;
