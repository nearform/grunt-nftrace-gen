/*
 * grunt-nftrace_gen
 *
 * Copyright (c) 2015 Glen Keane
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  grunt.registerTask('nftrace_gen', 'A grunt plugin for generating lttng tracepoints.', function() {

    var options = this.options({
      provider: 'nearForm',
      outputLocation: './node_modules', 
      probes: 'undefined'
    });

    if(typeof options.probes !== 'undefined'){
      var Nftrace = require('nftrace-scaffold');
      var nftrace = new Nftrace(options.provider, options.outputLocation);
      
      options.probes.forEach(function(probe){
        nftrace.createProbe(probe.name, probe.fields, probe.args);
      });
      
      nftrace.finaliseProbes();

    } else{

      grunt.util.error("Hey silly, you left your probe array blank! Don't call the task if you aren't defining any probes!");
      return false;
    }
    return true;
  });

};
