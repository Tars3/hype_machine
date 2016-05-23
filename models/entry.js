var mongoose = require('mongoose');

var entrySchema = mongoose.Schema({
  image: String,
  description: String,
  votes: Number
});

var Entry = mongoose.model('Entry', entrySchema)

module.exports = Entry;

