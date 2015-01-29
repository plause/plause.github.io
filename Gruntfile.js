module.exports = function(grunt) {
  'use strict';

  require('load-grunt-tasks')(grunt);

  var config = {};

  config.jshint = {
    gruntfile: {
      src: 'Gruntfile.js'
    }
  };

  config.htmlmin = {
    index: {
      src: 'index.html',
      dest: 'dist/site/index.html'
    }
  };

  grunt.initConfig(config);

  grunt.registerTask('default', ['jshint', 'htmlmin']);
};
