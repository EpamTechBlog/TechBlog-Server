'use strict';
require('../models/topic.model.js');

const mongoose = require('../config/mongoose.config');
const Topic = mongoose.model('Topic');

var topics = [
      {
        topicName : 'JAVASCRIPT',
        description : 'High-level, dynamic, untyped, and interpreted programming language',
        link : "",
        icon: "loyalty",
        effect:'effect-marley',
        img : "http://tympanus.net/Development/HoverEffectIdeas/img/17.jpg",
      },
      {
        topicName : 'RUBY',
        icon: "closed_caption",
        description : 'Dynamic, reflective, object-oriented, general-purpose programming language',
        link : "",
        effect:'effect-jazz',
        img : "http://tympanus.net/Development/HoverEffectIdeas/img/25.jpg",
      },
      {
        topicName : 'C++',
        description : ' Middle-level programming language developed by Bjarne Stroustrup starting in 1979 at Bell Labs',
        link : "",
        icon: "donut_small",
        effect:'effect-sadie',
        img : "http://tympanus.net/Development/HoverEffectIdeas/img/25.jpg",
      },
      {
        topicName : 'JAVA',
        description : ' A general-purpose computer programming language that is concurrent, class-based, object-oriented',
        link : "",
        effect:'effect-romeo',
        icon: "local_cafe",
        img : "http://tympanus.net/Development/HoverEffectIdeas/img/12.jpg",
      },
      {
        topicName : 'PYTHON',
        description : 'A widely used high-level, general-purpose, interpreted, dynamic programming language',
        link : "",
        effect:'effect-ming',
        icon: "donut_small",
        img : "http://tympanus.net/Development/HoverEffectIdeas/img/9.jpg",
      },
      {
        topicName : 'OBJCTIVE C',
        description : 'A general-purpose, object-oriented programming language',
        link : "",
        icon: "closed_caption",
        effect:'effect-apollo',
        img : "http://tympanus.net/Development/HoverEffectIdeas/img/18.jpg",
      },
    ];


     // {
     //    topicName : 'C#',
     //    description : 'Maecenas vulputate sem ut',
     //    link : "",
     //    effect:'effect-bubba',
     //    img : "http://tympanus.net/Development/HoverEffectIdeas/img/19.jpg",
     //  },

function init(){
  Topic.find({}, function(err, data){
    if(err) console.log(err);
    else{
      if(data.length === 0) {
      console.log("start to initialize the topic table");

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
};

module.exports = init;