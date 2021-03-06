require('dotenv').load();
var mongoose = require('./database');
var Entry = require('../models/entry');

var entries = [
  {
    image: "https://cdn0.vox-cdn.com/thumbor/ZsrmegSpGQhksEJ4sZvkC_yQP1g=/1400x0/filters:no_upscale()/cdn0.vox-cdn.com/uploads/chorus_asset/file/6504799/Screen_Shot_2016-05-18_at_1.19.55_PM.0.png",
    description: "Google Home",
    votes: 33
  },
  {
    image: "http://www.samsung.com/us/explore/galaxy-s7-features-and-specs/dist/assets/img/module3/s7edge.jpg",
    description: "Samsung Galaxy S7 Edge",
    votes: 7
  },
  {
    image: "https://i1.wp.com/hypebeast.com/image/2016/05/New-Adidas-Yeezy-750-Boost-colorway-00001.jpg?w=1382",
    description: "Adidas Yeezy 750",
    votes: 51
  },
  {
    image: "http://www.consumerreports.org/content/dam/cro/news_articles/cars/CR-Cars-II-2018-Tesla-Model-3-silver-pr-4-16.jpg",
    description: "Tesla Model 3",
    votes: 3
  },
  {
    image: "http://www.lg.com/ro/images/TV/features/ro_sup_he_hero_005.jpg",
    description: "LG 65GXP OLED TV",
    votes: 65
  },
  {
    image: "http://www.notebookcheck.net/uploads/tx_nbc2/4zu3macbook12.jpg",
    description: "Apple Macbook 2016",
    votes: 16
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


