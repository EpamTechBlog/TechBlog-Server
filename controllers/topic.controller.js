'use strict';
require('../models/topic.model.js');

const mongoose = require('../config/mongoose.config');
const Topic = mongoose.model('Topic');
const ObjectId = require('mongoose').Types.ObjectId;

//search all topics
exports.getAllTopics = (req,res,next) => {
  console.log('enter getAllTopics');
  Topic.find({}, (err,data)=>{
    if(err){
      res.jsonp(err);
    }else{
      res.jsonp(data);
    }
  })
}
