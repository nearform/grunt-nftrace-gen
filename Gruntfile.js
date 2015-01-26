/*
 * grunt-gen
 * https://github.com/glen/grunt-gen
 *
 * Copyright (c) 2015 Glen Keane
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    
    nftrace_gen: {
      options: {
        provider: 'yourProvider',
        outputLocation: './node_modules', 
        probes: [{
          name: 'probe',
          fields: ['int:number', 'string:message'],
          args: ['number']
        }]
      }
    }

  });
  
  grunt.loadTasks('tasks');

  grunt.registerTask('default', ['nftrace_gen']);

};
