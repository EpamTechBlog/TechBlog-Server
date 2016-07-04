'use strict';
const express = require('express');
const router = express.Router();
const mongoose = require('../config/mongoose.config');
require('../models/topic.model.js');
const TopicModel = mongoose.model('Topic');
const topicController = require('../controllers/topic.controller.js');


router.get('/', topicController.getAllTopics);

module.exports = router;


