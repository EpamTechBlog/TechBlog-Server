'use strict';
const express = require('express');
const router = express.Router();
const articleController = require('../controllers/article.controller.js');

router.get('/', articleController.getAll);
router.get('/author/:id', articleController.getByAuthorId);
router.get('/topic/:name', articleController.getByTopic);


module.exports = router;


