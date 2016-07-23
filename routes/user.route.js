var express = require('express');
var router = express.Router();
var passport = require('../config/passport.config');
var mongoose = require('../config/mongoose.config');
var userController = require('../controllers/user.controller');
// register the user schema
require('../models/user.model');

var User = mongoose.model("User");


router.post('/register', userController.register);

router.post('/login', passport.authenticate('local'), userController.login);

router.get('/:id', userController.getInfo);

router.put('/:id', userController.updateInfo);

module.exports = router
