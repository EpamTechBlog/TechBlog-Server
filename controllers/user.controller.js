  var express = require('express');
var router = express.Router();
var passport = require('../config/passport.config');
var mongoose = require('../config/mongoose.config');
// register the user schema
require('../models/user.model');
var User = mongoose.model("User");


exports.register =  function(req, res, next) {
  var user = new User(req.body);
  user.save(function(err){
    if(err) res.jsonp(err);
    else res.jsonp(user);
  });
};

exports.login =  function(req, res) {

  res.jsonp(req.user);
};

exports.getInfo = function(req, res){
  var id = req.params.id;

  if(id){

    User.findOne({_id : id}, function(err, data){
      if(err) res.jsonp(err);
      else res.jsonp(data);
    });
  }
}

exports.updateInfo = function(req, res){
  var id = req.params.id;
  User.findOneAndUpdate({_id : id}, { $set : req.body }, function(err, response){
      if(err) console.log(err);
      else res.jsonp(response);
  });
}

