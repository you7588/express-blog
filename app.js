require('./models/init');
var express = require('express');
var expressLayouts = require('express-ejs-layouts');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var config = require('./config');
var auth = require('./middlewares/auth');

var page = require('./route.page');
var api = require('./route.api');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(expressLayouts);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser(config.cookieName));
app.use(express.static(path.join(__dirname, 'public')));

app.use(auth.authUser);
app.use('/', page);
console.log('==============app.js=================');
app.use('/api/v1', api);
console.log('===============app2.js================');

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message || err;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // the error response
  console.log('===================render the app.js error page=====================');
  res.status(err.status || 500);
  res.format({
    json(){
      res.send({error: err.toString()});
    },
    html(){
      res.render('error');
    },
    default(){
      const message = `${errorDetails}`;
      res.send(`500 Internal servererror:\n${err.toString()}`);
    },
  });
});

module.exports = app;
