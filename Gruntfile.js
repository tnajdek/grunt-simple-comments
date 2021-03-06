/*
 * grunt-simple-comments
 * https://github.com/tnajdek/grunt-simple-comments
 *
 * Copyright (c) 2014 Tom Najdek
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
	var appId = process.env.PARSE_APP_ID,
		masterKey = process.env.PARSE_MASTER_KEY;

	// Project configuration.
	grunt.initConfig({
		jshint: {
			all: [
				'Gruntfile.js',
				'tasks/*.js',
				'<%= nodeunit.tests %>',
			],
			options: {
				jshintrc: '.jshintrc',
			},
		},

		// Before generating any new files, remove any previously-created files.
		clean: {
			tests: ['tmp'],
		},

		// Configuration to be run (and then tested).
		simple_comments: {
			default_options: {
				options: {
					'appId': appId,
					'masterKey': masterKey
				}
			}
		},
		// Unit tests.
		nodeunit: {
			tests: ['test/*_test.js'],
		},

	});

	// Actually load this plugin's task(s).
	grunt.loadTasks('tasks');

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-nodeunit');

	// Whenever the "test" task is run, first clean the "tmp" dir, then run this
	// plugin's task(s), then test the result.
	grunt.registerTask('test', ['clean', 'simple_comments', 'nodeunit']);

	// By default, lint and run all tests.
	grunt.registerTask('default', ['jshint', 'test']);

};
