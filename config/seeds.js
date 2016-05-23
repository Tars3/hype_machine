require('dotenv').load();
var mongoose = require('./database');

// var Book = require('../models/book');
// var Game = require('../models/game');
var Show = require('../models/entry');
// var Todo = require('../models/todo');

var entries = [
  { image: "Twilight",
    description: "Stephenie Meyer",
    votes: "1"
  },
  {
    image: "Design Patterns",
    description: "Gang of Four",
    votes: "20"
  }
];

// Book.remove({}, function(err) {
//   if (err) console.log(err);
//   Book.create(books, function(err, books) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("Database seeded with " + books.length + " books.");
//     }
//   });
// });

// Game.remove({}, function(err) {
//   if (err) console.log(err);
//   Game.create(games, function(err, games) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("Database seeded with " + games.length + " games.");
//     }
//   });
// });

// Show.remove({}, function(err) {
//   if (err) console.log(err);
//   Show.create(shows, function(err, shows) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("Database seeded with " + shows.length + " shows.");
//       mongoose.connection.close();
//     }
//     process.exit();
//   });
// });

// Todo.remove({}, function(err) {
//   if (err) console.log(err);
//   Todo.create(todos, function(err, todos) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("Database seeded with " + todos.length + " books.");
//       mongoose.connection.close();
//     }
//     process.exit();
//   });
// });
