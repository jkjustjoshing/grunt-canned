/*
 * grunt-canned
 * http://github.com/jkjustjoshing/grunt-canned
 *
 * Copyright (c) 2014 Josh Kramer
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
  // load all npm grunt tasks
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    canned: {
      options: {
        src: '<%= nodeunit.tests %>/api/',
        port: '7654'
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  // Don't run tests until actually have tests - complains if none are present
  // grunt.registerTask('test', ['clean', 'canned', 'nodeunit']);
  grunt.registerTask('test', ['clean', 'canned']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
