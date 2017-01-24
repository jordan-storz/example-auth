const express = require('express');
const router = express.Router();
const query = require('../utils/query');
const queryError = require('../utils/query-error');

router.get('/', function(req, res) {
  query('user')
    .all()
    .then(users => {
      res.json(users)
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
})

module.exports = router;
