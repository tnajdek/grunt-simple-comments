'use strict';

var grunt = require('grunt'),
	Parse = require('node-parse-api').Parse,
	process.env.PARSE_APP_ID,
	masterKey = process.env.PARSE_MASTER_KEY,
	testapp;

/*
	======== A Handy Little Nodeunit Reference ========
	https://github.com/caolan/nodeunit

	Test methods:
		test.expect(numAssertions)
		test.done()
	Test assertions:
		test.ok(value, [message])
		test.equal(actual, expected, [message])
		test.notEqual(actual, expected, [message])
		test.deepEqual(actual, expected, [message])
		test.notDeepEqual(actual, expected, [message])
		test.strictEqual(actual, expected, [message])
		test.notStrictEqual(actual, expected, [message])
		test.throws(block, [error], [message])
		test.doesNotThrow(block, [error], [message])
		test.ifError(value)
*/

exports.simple_comments = {
	setUp: function(done) {
		// setup here if necessary
		testapp = new Parse(appId, masterKey);
		

		done();
	},
	default_options: function(test) {
		test.expect(1);

		var actual = grunt.file.read('tmp/default_options');
		var expected = grunt.file.read('test/expected/default_options');
		test.equal(actual, expected, 'should describe what the default behavior is.');

		test.done();
	}
};
