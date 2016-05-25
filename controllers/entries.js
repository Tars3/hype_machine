var Entry = require('../models/entry');

module.exports = {
  index: index,
  entry: entry,
  create: create
}

function index (req, res, next) {
  console.log('hello world')
  Entry.find({}, function (err, entries) {
    if (err) next(err);

    res.json(entries);
  })
}

function entry(req, res, next) {
  var id = req.params.id;

  Entry.findById(id, function(err, entry) {
    if (err) next (err);

    res.json(entry);
  });
}

function create(req, res, next) {
  var newEntry = new Entry(req.body);

  newEntry.save(function(err, savedEntry) {
    if (err) next(err);

    res.json(savedEntry);
  });

}
