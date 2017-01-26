const express = require('express');
const router = express.Router();
const query = require('../utils/query');
const queryError = require('../utils/query-error');
const patchSuccess = require('../utils/patch-success');
const datify = require('../utils/datify');

router.get('/', function(req, res) {
  query('user')
    .all()
    .then(users => {
      res.json(datify(users))
    })
    .catch(queryError(res))
});

router.post('/', function(req, res) {
  query('user')
    .add(req.body)
    .then(() => {
      res.json({msg: 'success'})
    })
    .catch(queryError(res));
});

router.get('/:id', function (req, res) {
  query('user')
    .one(req.params.id)
    .then(user => res.json(datify(user)))
    .catch(queryError(res));
});

router.patch('/:id', function (req, res) {
  query('user')
    .update(req.params.id, req.body)
    .then(user => {
      let response = patchSuccess(datify(user));
      res.json(response);
    });
})

module.exports = router;
