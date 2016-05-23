var Entry = require('../models/entry');

module.exports = {
  index: index
  // show: show
}

function index (req, res, next) {
  Entry.find({}, function (err, entries) {
    if (err) next(err);

    res.json(entries);
  })
}
