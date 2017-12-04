var marked = require('marked');
var express = require('express');
var config = require('./config');
var router = express.Router();
var PostModel = require('./models/post');

/* GET signup page. */
router.get('/signup', function(req, res, next) {
  res.render('signup');
  console.log('-------signup-page----');
});

/* GET signin page. */
router.get('/signin', function (req, res, next) {
  res.render('signin');
  console.log('-------signin-page----');
});

/* GET signout */
router.get('/signout', function (req, res, next) {
  res.clearCookie(config.cookieName, { path: '/' });
  res.redirect('/');
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET posts page. */
router.get('/posts', function(req, res, next) {
  res.render('posts', { title: '我的文章' });
});

/* GET posts create page. */
router.get('/posts/create', function(req, res, next) {
  res.render('create');
});

/* GET posts edit page. */
router.get('/posts/edit', function(req, res, next) {
  var id = req.query.id;

  res.render('edit', { id });
});

/* GET posts show page. */
router.get('/posts/show', function(req, res, next) {
  var id = req.query.id;

  PostModel.findOne({ _id: id }, function(err, post) {
    post.mkContent = marked(post.content);
    res.render('show', { post });
  });
});

module.exports = router;
