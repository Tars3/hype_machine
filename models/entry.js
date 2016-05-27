var mongoose = require('mongoose');

var entrySchema = mongoose.Schema({
  image: String,
  description: String,
  votes: {type: Number, default: 0}
});

var Entry = mongoose.model('Entry', entrySchema)

module.exports = Entry;

