var express = require('express');
var router = express.Router();

var entriesController = require('../controllers/entries');
// require users controller
var usersCtrl = require('../controllers/users')

// require token authentication.
var token = require('../config/token_auth')

// users resource paths:
router.post('/api/users', usersCtrl.create);
router.get('/api/users/me', token.authenticate, usersCtrl.me);

router.post('/api/token', token.create);

router.put('/api/upvote/:id', entriesController.upvote)

router.route('/api/entries')
  .get(entriesController.index)
  .post(entriesController.create);

router.route('/api/entries/:id')
  .get(entriesController.entry)
//   .put(entriesController.update)
  .delete(entriesController.destroy);

/* GET home page. */
router.get('*', function(req, res, next) {
  res.sendFile('public/index.html');
});

router.get('*', function(req, res, next) {
  res.redirect('/');
});

module.exports = router;
