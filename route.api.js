var express = require('express');
var router = express.Router();
var PostModel = require('./models/post');

/* GET users lists. */
router.get('/users', function(req, res, next) {
  res.send('respond with a resource');
});



/* POST create post 将数据保存到数据库的post表中 */
router.post('/posts/create', function (req, res, next) {
  var title = req.body.title;
  var content = req.body.content;

  var post = new PostModel();
  post.title = title;
  post.content = content;
  post.save(function (err) {
    if (err) {
      res.json({success: false});
    } else {
      res.json({success: true});
    }
  });
});


/* GET posts lists 获取所有文章列表是从数据库查数据 */
router.get('/posts', function (req, res, next) {
  PostModel.find({}, {}, function (err, posts) {
    if (err) {
      res.json({ success: false });
    } else {
      res.json({ success: true, postsList: posts });
    }
  });
});


module.exports = router;
