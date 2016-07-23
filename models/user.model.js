var mongoose = require("mongoose"),
 Schema = mongoose.Schema,
 crypto = require('crypto');

/**
 * User Schema
 */
var UserSchema = new Schema({

  username: {
    type: String,
    unique: 'Username already exists',
    required: 'Please fill in a username'
  },
  password: {
    type: String,
    required: 'Please fill in a password',
  },
  salt: {
    type: String
  },
  jobTitle:{
    type: String,
    optional:true
  },
  homeAddress:{
    type: String,
    optional:true
  },
  skills:{
    type: Array,
    optional:true
  },
  "skills.$" : {
    type : String
  },
  articles:{
    type: Array,
    optional:true
  },
  "articles.$" : {
    type : String
  },
  profileImage:{
    type : String,
    optional:true
  },
  phone : {
    type : String,
    optional:true
  },
  email : {
    type : String,
    optional:true
  },
  subscribed : {
    type : String,
    default : 'yes'
  }

});

// Use a pre-save middleware to hash the password
UserSchema.pre('save', function(next) {
  if (this.password) {
    this.salt = new Buffer(crypto.randomBytes(16).toString('base64'), 'base64');
    this.password = this.hashPassword(this.password);
  }

  next()
});
// Create an instance method for hashing a password
UserSchema.methods.hashPassword = function(password) {
  return crypto.pbkdf2Sync(password, this.salt, 10000, 64).toString('base64');
};

// Create an instance method for authenticating user
UserSchema.methods.validPassword = function(password) {
  return this.password === this.hashPassword(password);
};

module.exports = mongoose.model('User', UserSchema)

