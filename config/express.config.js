var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require("./mongoose.config");
var passport = require("./passport.config");
var LocalStrategy = require('passport-local').Strategy;
var session = require('express-session');
var flash = require('express-flash');
var app = express();

app.use(express.static('public'));
app.use(cookieParser());
app.use(bodyParser.json('2mb'));
app.use(bodyParser.urlencoded({extended: true, limit: '2mb'}));
app.use(session({ secret: 'keyboard cat' , resave: false, saveUninitialized: false}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(function(req, res, next) {
    // Set permissive CORS header - this allows this server to be used only as
    // an API server in conjunction with something like webpack-dev-server.
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    res.setHeader('Cache-Control', 'no-cache');
    next();
});


var users = require('../routes/user.route');
var articles = require('../routes/article.route');
var topics = require('../routes/topic.route');
var comments = require('../routes/comment.route');
app.use('/users', users);
app.use('/articles', articles);
app.use('/topics', topics);
app.use('/comments',comments);

//init dummy data
require('../init/initDummyData.js');


module.exports = app;