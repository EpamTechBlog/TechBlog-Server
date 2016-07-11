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
exports.getArticleById = (req,res,next)=>{
  const id = req.params.id;
  //search article with id
  ArticleModel.findById(new ObjectId(id),(err,doc)=>{
    if(err){
      res.send('err',err);
    }else{
      res.jsonp(doc);
    }
  });
}

//delete specific article with id
exports.deleteArticleById = (req, res, next)=>{
  const id = req.params.id;
  //search article with id
  ArticleModel.findByIdAndRemove(id, (err, doc)=>{
    if(err){
      res.send('err',err);
    }else{
      console.log('successfully delete', doc);
      res.jsonp(doc);
    }
  });
}

//search specific articles with author id
exports.getByAuthorId = (req,res,next)=>{
  const authorId = req.params.id;
  //search article with id
  ArticleModel.find({authorId: new ObjectId(authorId)},(err,doc)=>{
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
  //search article with id
  ArticleModel.find({topic: name}, 'title authorName authorId publishDate topic _id',  (err,doc)=>{
    if(err){
      res.send('get article by id error',err);
    }else{
      console.log('doc: ', doc);
      res.send({articles: doc});
    }
  });
}

//search specific articles with author id
exports.changeComment = (req,res,next) => {
  const articleId = req.params.articleId;
  const commentId = req.params.commentId;


  ArticleModel.findOneAndUpdate(
    {'_id': new ObjectId(articleId)},
    {$set:{commentId: commentId}},
    (doc,err)=>{
      if(err){
        res.send('Modify Comment error', err);
      } else{
        res.send({article: doc});
      }
    });
}



exports.postArticle = (req, res) => {
  console.log(req.body);
  const article = new ArticleModel(req.body);

  article.save(function(err, data){
      if(err) console.log(err);
      else {
        res.jsonp(data);
        console.log("new post is added", data);
      }
  });
}