var mongoose = require('mongoose');
var config = require('../config');

mongoose.Promise = global.Promise;

mongoose.connect(config.mongodbUrl, {
  useMongoClient: true
});
