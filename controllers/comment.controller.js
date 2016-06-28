var express = require('express');
var router = express.Router();
var mongoose = require('../config/mongoose.config');
// register the comment schema
require('../models/comment.model');
var Comment = mongoose.model("Comment");

exports.add = function(req, res){
	var articleId = req.body.articleId;
	Comment.find({articleId:});

}
exports.addReply = function(req, res){

}

exports.read = function(req, res){
	var articleId = req.body.articleId;

}


/*
var CommentSchema = new Schema({
	articleId: {
		type: mongoose.Schema.Types.ObjectId, 
		ref: 'Article'
	},
	comments: [{
		creator: {
			type: mongoose.Schema.Types.ObjectId, 
			ref: 'User'
		}, 
		content: String, 
		time: Date,
		comments2comments:[{
			replyer:{
				type: mongoose.Schema.Types.ObjectId, 
				ref: 'User'
			}
			time: Date,
			content: String,
			atter:{
				type: mongoose.Schema.Types.ObjectId, 
				ref: 'User'
			}
		}],
	}],
});

*/