module.exports = function(grunt) {
  'use strict';

  require('load-grunt-tasks')(grunt);

  var config = {};

  config.jshint = {
    gruntfile: {
      src: 'Gruntfile.js'
    }
  };

  grunt.initConfig(config);

  grunt.registerTask('default', ['jshint']);
};
