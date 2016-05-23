var mongoose = require('mongoose');

var entrySchema = mongoose.Schema({
  imageURL: String,
  description: String,
  votes: Number
});

var Entry = mongoose.model('Entry', entrySchema)

module.exports = Entry;
