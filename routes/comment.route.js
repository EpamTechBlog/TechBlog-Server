var express = require('express');
var router = express.Router();
var passport = require('../config/passport.config');
var mongoose = require('../config/mongoose.config');
var commentController = require('../controllers/comment.controller');
require('../models/comment.model');

 var Comment = mongoose.model("Comment");


router.post('/', commentController.add);
router.post('/reply', commentController.addReply);
router.get('/:articleId', commentController.read);
router.get('/getArticleIds/:userId', commentController.readByUserId);
router.get('/articles/:userId', commentController.readArticlesByUserId);

module.exports = router;