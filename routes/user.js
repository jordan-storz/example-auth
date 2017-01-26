const express = require('express');
const router = express.Router();
const query = require('../utils/query');
const queryError = require('../utils/query-error');
const successMessage = require('../utils/success-message');
const datify = require('../utils/datify');


/**
 * @api {get} /users Request User information
 * @apiName GetUsers
 * @apiGroup User
 *
 *
 * @apiSuccess {Array} user User info.
 */
router.get('/', function(req, res) {
  query('user')
    .all()
    .then(users => {
      res.json(datify(users))
    })
    .catch(queryError(res))
});

/**
 * @api {post} /users Creates user from given information.
 * @apiName PostUser
 * @apiGroup User
 *
 * @apiSuccess {String} email Email of the new User.
 */
router.post('/', function(req, res) {
  query('user')
    .add(req.body)
    .then(user => {
      let response = successMessage.post(datify(user));
      res.json(response);
    })
    .catch(queryError(res));
});

/**
 * @api {get} /users/:id Request User information
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {String} email Email of the User.
 */
router.get('/:id', function (req, res) {
  query('user')
    .one(req.params.id)
    .then(user => res.json(datify(user)))
    .catch(queryError(res));
});

/**
 * @api {post} /users Updates user from given information.
 * @apiName PatchUser
 * @apiGroup User
 *
 * @apiParam {Number} id Users unique ID.
 
 * @apiSuccess {String} email Email of the User.
 */
router.patch('/:id', function (req, res) {
  query('user')
    .update(req.params.id, req.body)
    .then(user => {
      let response = successMessage.patch(datify(user));
      res.json(response);
    });
})

module.exports = router;
