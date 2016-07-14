'use strict';
var express = require('express');
var router = express.Router();
var mongoose = require('../config/mongoose.config');
const ObjectId = require('mongoose').Types.ObjectId;
// register the comment schema
require('../models/comment.model');
var Comment = mongoose.model("Comment");
var Article = mongoose.model("Article");

exports.add = function(req, res){
	console.log(req.body);
	res.end("post comment success!");
	console.log("begin to add a 1-level comments");
	var articleId = req.body.articleId;
	var creator = req.body.creator;
	var content = req.body.content;
	console.log(req.body.articleId);
	Comment.findOne({articleId:articleId}, function(err, comment){
		console.log(comment);
		if(comment === null){
			comment = new Comment();
			comment.articleId = articleId;
			comment.comments = [{
				creator: creator,
				content: content,
				time: new Date(),
				comments2comments:[]
			}];
		}else{
			comment.comments.push({
				creator: creator,
				content: content,
				time: new Date(),
				comments2comments:[]
			});
		}
		comment.save(function(err){
			if(err){
				console.log("error");
				res.end(err);
			}
			else{
				console.log("saved");
				res.end("comment saved!");
			}

		});
	});

}

exports.addReply = function(req, res){
	var creator = req.body.creator;
	var articleId = req.body.articleId;
	var atter = req.body.atter;
	var replyer = req.body.replyer;
	var content = req.body.content;

	Comment.findOne({articleId:articleId}, function(err, comment){
		console.log(comment);
		if(comment != undefined){
			var comments = comment.comments;
			for(var i = 0; i < comments.length; i++){
				if(comments[i].creator === creator){
					comment.comments[i].comments2comments.push({
						replyer: replyer,
						content: content,
						atter: atter,
						time: new Date()
					});
				}
			}
			comment.save(function(err){
				if(err)
					res.jsonp(err);
				else
					res.jsonp(comment);
			});
		}else{
			res.jsonp({message:"not existing 1-level comment, so cannot reply"});
		}
	});

}

exports.read = function(req, res){

	var articleId = req.params.articleId;
	var comment = Comment.findOne({articleId:articleId}, function(err, comment){

		if(comment==null){
			res.jsonp(null);
		}else{
			res.jsonp(comment.comments);

		}

	});
}

exports.readByUserId = function (req, res, next){
	var userId = req.params.userId;

	var articleCommentedByUser = [];
	Comment.find({}, function(err, comments){
		// console.log(comments);
		if(err){
			res.jsonp(err);
		}else{
			for(var i = 0; i < comments.length; i++){
				for(var m = 0; m < comments[i].comments.length; m++){
					if(comments[i].comments[m].creator === userId){
						/*articleCommentedByUser.push({
						 	articleId: comments[i].articleId
						 });*/
						 articleCommentedByUser.push(comments[i].articleId);
						 break;
						}
						var comments2comments = comments[i].comments[m].comments2comments;
					// console.log(comments2comments);
					for(var j = 0; j < comments2comments.length; j++){
						if(comments2comments[j].replyer === userId){
							/*articleCommentedByUser.push({
							 	articleId: comments[i].articleId
							 });*/
							 articleCommentedByUser.push(comments[i].articleId);
							 break;
							}
						}
					}
				}
				res.jsonp(articleCommentedByUser);
			}
		});
}

exports.readArticlesByUserId = function (req, res, next){
  var userId = req.params.userId;
  console.log(userId);
  var articleCommentedByUser = [];
  var articles = [];
  Comment.find({}, function(err, comments){
    // console.log(comments);
    if(err){
      res.jsonp(err);
    }else{
      for(let i = 0; i < comments.length; i++){
        for(let m = 0; m < comments[i].comments.length; m++){
          if(comments[i].comments[m].creator === userId){
            articleCommentedByUser.push(comments[i].articleId);
            break;
          }
          let comments2comments = comments[i].comments[m].comments2comments;
          for(let j = 0; j < comments2comments.length; j++){
            if(comments2comments[j].replyer === userId){
              articleCommentedByUser.push(comments[i].articleId);
              break;
            }
          }
        }
      }
      // console.log(articleCommentedByUser);
      for(let n = 0; n < articleCommentedByUser.length; n++){
        console.log(articleCommentedByUser[n]);
        Article.findOne({ _id: new ObjectId(articleCommentedByUser[n]) },function(err, article){
          if(article !== null){
            articles.push({
              id: article._id,
              title: article.title,
              author: article.author,
              topic: article.topic,
              publishDate: article.publishDate
            });
          }
/*          console.log(articles);
          console.log(articles.length);
          console.log(articleCommentedByUser.length);*/
          if(articles.length === articleCommentedByUser.length){
            res.jsonp(articles);
          }
        });
      }
    }
  });
}