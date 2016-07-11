'use strict';
require('../models/topic.model.js');

const mongoose = require('../config/mongoose.config');
const Topic = mongoose.model('Topic');

var topics = [ 
      {
        topicName : 'JAVASCRIPT',
        description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        link : "",
        effect:'effect-marley',
        img : "http://tympanus.net/Development/HoverEffectIdeas/img/17.jpg",
      },
      {
        topicName : 'RUBY',
        description : 'Proin mauris ante, scelerisque consectetur',
        link : "",
        effect:'effect-jazz',
        img : "http://tympanus.net/Development/HoverEffectIdeas/img/25.jpg",
      },
      {
        topicName : 'C++',
        description : 'Sed vehicula, augue sit amet tincidunt molestie, metus augue risus',
        link : "",
        effect:'effect-sadie',
        img : "http://tympanus.net/Development/HoverEffectIdeas/img/25.jpg",
      },
      {
        topicName : 'JAVA',
        description : 'Pellentesque egestas magna fringillagna varius',
        link : "",
        effect:'effect-romeo',
        img : "http://tympanus.net/Development/HoverEffectIdeas/img/12.jpg",
      },
      {
        topicName : 'IOS',
        description : 'Proin mauris ante, scelerisque ut sollicitudin consectetur',
        link : "",
        effect:'effect-duke',
        img : "http://tympanus.net/Development/HoverEffectIdeas/img/27.jpg",
      },
      {
        topicName : 'PHP',
        description : 'Proin mauris ante, scelerisque ut sollicitudin consectetur',
        link : "",
        effect:'effect-lexi',
        img : "http://tympanus.net/Development/HoverEffectIdeas/img/7.jpg",
      },
      {
        topicName : 'PYTHON',
        description : 'Proin mauris ante, consectetur',
        link : "",
        effect:'effect-ming',
        img : "http://tympanus.net/Development/HoverEffectIdeas/img/9.jpg",
      },
      {
        topicName : 'C',
        description : 'Proin mauris ante, scelerisque ut sollicitudin consectetur',
        link : "",
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