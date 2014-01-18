/*
 * grunt-simple-comments
 * https://github.com/tnajdek/grunt-simple-comments
 *
 * Copyright (c) 2014 Tom Najdek
 * Licensed under the MIT license.
 */


module.exports = function(grunt) {
	'use strict';

	// Please see the Grunt documentation for more information regarding task
	// creation: http://gruntjs.com/creating-tasks

	grunt.registerMultiTask('simple_comments', 'Grunt task to setup and remotely review comments stored on parse.com and created on a site using simple-comments library', function() {
		// Merge task-specific and/or target-specific options with these defaults.
		var options = this.options({}),
			Parse = require('node-parse-api').Parse,
			app = new Parse(options.appId, options.masterKey);

		app.findMany('comments_queue', {}, function(err, response) {
			
		});


	});

};
