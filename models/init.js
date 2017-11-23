var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:32770/firstapp', {
  useMongoClient: true
});
