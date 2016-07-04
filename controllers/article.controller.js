'use strict';
require('../models/article.model.js');

const mongoose = require('../config/mongoose.config');
const ArticleModel = mongoose.model('Article');
const ObjectId = require('mongoose').Types.ObjectId;


//search all articles
exports.getAll = (req,res,next) =>{
  ArticleModel.find({},(err,doc)=>{
    if(err){
      res.send('err',err);
    }else{
      res.send({articles: doc});
    }
  })
}

//search specific article with id
// exports.getById = (req,res,next)=>{
//   const id = req.params.id;
//   //search article with id
//   ArticleModel.findById(new ObjectId(id),(err,doc)=>{
//     if(err){
//       res.send('err',err);
//     }else{
//       res.send({articles: doc});
//     }
//   });
// }

//search specific articles with author id
exports.getByAuthorId = (req,res,next)=>{
  const authorId = req.params.id;
  console.log('enter getByAuthorId',authorId);
  //search article with id
  ArticleModel.find({author: new ObjectId(authorId)},(err,doc)=>{
    if(err){
      res.send('err',err);
    }else{
      res.send({articles: doc});
    }
  });
}

//search specific articles with author id
exports.getByTopic = (req,res,next)=>{
  const name = req.params.name;
  console.log('enter getByTopic',name);
  //search article with id
  ArticleModel.find({topic: name},(err,doc)=>{
    if(err){
      res.send('err',err);
    }else{
      res.send({articles: doc});
    }
  });
}

exports.postArticle = (req, res) => {

  const article = new ArticleModel(req.body);

  article.save(function(err, data){
      if(err) console.log(err);
      else res.jsonp(data);
  });
  console.log("new post is added");
}