'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentSchema = new Schema({
  topicName: {
    type: String,
    default: '',
    trim: true,
  },
});

module.exports = mongoose.model('Comment', CommentSchema);
