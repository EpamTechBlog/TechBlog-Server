'use strict';
const express = require('express');
const router = express.Router();
const articleController = require('../controllers/article.controller.js');

router.get('/', articleController.getAll);
router.get('/:id', articleController.getArticleById);
router.get('/author/:id', articleController.getByAuthorId);
router.get('/topic/:name', articleController.getByTopic);

router.post('/', articleController.postArticle);
router.delete('/:id', articleController.deleteArticleById);



router.put('/comment/:articleId/:commentId', articleController.changeComment);

module.exports = router

