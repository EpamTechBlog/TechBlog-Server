var mongoose = require("mongoose"),
Schema = mongoose.Schema;
// var Article = require('./article.model');
// var User = require('./user.model');

var CommentSchema = new Schema({
	articleId: {
		// type: mongoose.Schema.Types.ObjectId,
		type: String,
		ref: 'Article'
	},
	comments: [{

		creator: {
			// type: mongoose.Schema.Types.ObjectId,
			type: String,
			ref: 'User'
		},
		content: String,
		time: Date,
		comments2comments:[{
			replyer:{
				type: String
			},
			time: Date,
			content: String
		}],
	}],
});

/*
var CommentSchema = new Schema({
	articleId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Article'
	},
	commentorId:{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
	commentId:{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Comment'
	},
	content: String,
	time: Date
});*/

module.exports = mongoose.model('Comment', CommentSchema);
