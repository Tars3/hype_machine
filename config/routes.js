var express = require('express');
var router = express.Router();

var entriesController = require('../controllers/entries');

router.route('/api/entries')
  .get(entriesController.index)
  .post(entriesController.create);

// router.route('/api/entries/:id')
//   .get(entriesController.show)
//   .put(entriesController.update)
//   .delete(entriesController.destroy);

/* GET home page. */
router.get('*', function(req, res, next) {
  res.sendFile('public/index.html');
});

module.exports = router;
