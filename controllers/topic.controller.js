'use strict';
require('../models/topic.model.js');

const mongoose = require('../config/mongoose.config');
const Topic = mongoose.model('Topic');
const ObjectId = require('mongoose').Types.ObjectId;

//search all topics
exports.getAllTopics = (req,res,next) =>{
  Topic.find({},(err,data)=>{
    if(err){
      res.jsonp(err);
    }else{
      res.jsonp(data);
    }
  })

}


var topics = [
      {
        topicName : 'JS',
        description : 'When Layla appears',
        link : "",
        effect:'effect-roxy',
        img : "http://download.4-designer.com/files/20130906/Creative-business-meetings-HD-pictures-48709.jpg",
      },
      {
        topicName : 'PHP',
        description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        link : "",
        effect:'effect-marley',
        img : "http://tympanus.net/Development/HoverEffectIdeas/img/17.jpg",
      },
      {
        topicName : 'C++',
        description : 'Sed vehicula, augue sit amet tincidunt molestie, metus augue risus',
        link : "",
        effect:'effect-sadie',
        img : "http://tympanus.net/Development/HoverEffectIdeas/img/25.jpg",
      },
      {
        topicName : 'IOS',
        description : 'Proin mauris ante, scelerisque ut sollicitudin consectetur',
        link : "",
        effect:'effect-sarah',
        img : "http://tympanus.net/Development/HoverEffectIdeas/img/3.jpg",
      },
      {
        topicName : 'C#',
        description : 'Maecenas vulputate sem ut',
        link : "",
        effect:'effect-bubba',
        img : "http://tympanus.net/Development/HoverEffectIdeas/img/9.jpg",
      },
      {
        topicName : 'JAVA',
        description : 'Pellentesque egestas magna fringillagna varius',
        link : "",
        effect:'effect-sarah',
        img : "http://tympanus.net/Development/HoverEffectIdeas/img/12.jpg",
      }
    ];

Topic.find({}, function(err, data){
  if(err) console.log(err);
  else{
	  if(data.length === 0) {
		console.log("start to initialize the topics");

	    topics.map((topic) => {
	      let t = new Topic(topic);
	      t.save(function(err, response){
	      	if(err) console.log(err);
	      	console.log("insert successfully", response._id);
	      });
	    });
	  }
	}
});


