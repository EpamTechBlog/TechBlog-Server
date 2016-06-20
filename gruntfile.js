module.exports = function(grunt) {
  var path = require('path');
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {

      scripts: {
        files: ['models/*.js', 'routes/*.js', 'app.js'],
        tasks: ['express:dev'],
        options: {
          interrupt: true,
          serverreload: true,
          atBegin: true,
          //livereload: 8000,
        },
      },
    },
    express: {
      options: {
        // Override defaults here
      },
      dev: {
        options: {
          script: './app.js'
        }
      },
    }

  });

  // Default task(s).
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-express-server');

};