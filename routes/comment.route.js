var express = require('express');
var router = express.Router();
var passport = require('../config/passport.config');
var mongoose = require('../config/mongoose.config');
var commentController = require('../controllers/comment.controller');
require('../models/comment.model');

 var Comment = mongoose.model("Comment");


router.post('/', commentController.add);
router.post('/:articleId/reply/:commentId', commentController.addReply);
router.get('/:articleId', commentController.read);
router.get('/getArticleIds/:userId', commentController.readByUserId);
router.get('/articles/:username', commentController.readArticlesByUsername);
router.delete('/:articleId', commentController.deleteByArticleId);

module.exports = router;