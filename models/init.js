var mongoose = require('mongoose');

mongoose.connect('mongodb://192.168.99.100:32769/weapp', {
  useMongoClient: true
});
