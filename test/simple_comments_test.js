'use strict';

var grunt = require('grunt'),
	Parse = require('node-parse-api').Parse,
	appId = process.env.PARSE_APP_ID,
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
		var queued_comment1 = {
				name: 'tester',
				email: 'tester@tester.com',
				website: 'http://tester.com',
				comment: 'Hello World',
				slug: 'some-post'
			},
			approved_comment = {
				objectId: 'iyZEI9WptO',
				name: 'tester',
				comment: 'Just some text',
				slug: 'some-post'
			},
			queued_comment2 = {
				name: 'tester 2',
				email: 'tester2@tester.com',
				website: 'http://tester2.com',
				comment: 'Thats right!',
				slug: 'some-post',
				replyTo: 'iyZEI8WptO'
			};
		
		testapp = new Parse(appId, masterKey);
		testapp.insert('comments_queue', queued_comment1, function (err, response) {
			console.log(response);
		});
		testapp.insert('comments_approved', approved_comment, function(err, response) {
			testapp.insert('comments_queue', queued_comment2, function(err, response) {
				done();
			});
		});
	}
};
