'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/*
* Article Schema
*/

var ArticleSchema = new Schema({
  title: {
    type: String,
    required: 'Title of article cannot be blank',
    trim: true,
  },
  author: {
    type: String,
    default: '',
    ref: 'user'
  },
  topic: {
    type: String,
    default: '',
    trim: true,
  },
  publishDate: {
    type: Date,
    default: Date.now,
    trim: true,
  },
  content: {
    type: String,
    default: '',
    trim: true,
  },
  tags: {
    type: Array,
    default: [],
  },
  comments: {
    type: Array,
    default: [],
    ref: 'comment'
  }
});

module.exports = mongoose.model('Article', ArticleSchema);
