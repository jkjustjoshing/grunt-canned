/*
 * grunt-canned
 * http://github.com/jkjustjoshing/grunt-canned
 *
 * Copyright (c) 2014 Josh Kramer
 * Licensed under the MIT license.
 */

'use strict';

var http = require('http');
var canned = require('canned');

module.exports = function (grunt) {


  grunt.registerTask('canned', 'Grunt wrapper around https://github.com/sideshowcoder/canned node module', function () {

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      port:'3000',
      src: './api'
    });

    var cannedOptions = {
      cors: true,
      logger: process.stdout
    };

    var cannedInstance = canned(options.src, cannedOptions);

    http.createServer(cannedInstance).listen(options.port);
    console.log('Mock API server running at http://localhost:' + options.port + ', serving files from ' + options.src);
  });

};
