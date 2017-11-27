var express = require('express');
var router = express.Router();
var PostModel = require('./models/post');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET posts page. */
router.get('/posts', function(req, res, next) {
  res.render('posts', { title: 'posts'} );
});

/* GET posts edit page. */
router.get('/posts/create', function(req, res, next) {
  res.render('create');
});

/* GET show page. */
router.get('/posts/show', function (req, res, next) {
  var id = req.query.id;

  PostModel.findOne({_id: id}, function (err, post) {
    res.render('show', {post});
  });
});

module.exports = router;
