var Entry = require('../models/entry');

module.exports = {
  index: index,
  create: create
}

function index (req, res, next) {
  Entry.find({}, function (err, entries) {
    if (err) next(err);

    res.json(entries);
  })
}

function create(req, res, next) {
  var newEntry = new Entry(req.body);

  newEntry.save(function(err, savedEntry) {
    if (err) next(err);

    res.json(savedEntry);
  });

}
