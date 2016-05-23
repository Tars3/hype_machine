require('dotenv').load();
var mongoose = require('./database');

var Entry = require('../models/entry');

var entries = [
  {
    image: "Twilight",
    description: "Stephenie Meyer",
    votes: "1"
  },
  {
    image: "Design Patterns",
    description: "Gang of Four",
    votes: "20"
  },
  {
    image: "https://i1.wp.com/hypebeast.com/image/2016/05/New-Adidas-Yeezy-750-Boost-colorway-00001.jpg?w=1382",
    description: "Adidas Yeezy 750",
    votes: "51"
  }
];

Entry.remove({}, function(err) {
  if (err) console.log(err);
  Entry.create(entries, function(err, entries) {
    if (err) {
      console.log(err);
    } else {
      console.log("Database seeded with " + entries.length + " entries.");
      mongoose.connection.close();
    }
    process.exit();
  });
});


