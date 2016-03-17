var assert = require('assert');
var PriorityQ = require('../src/priorityq');

describe('priority queue', function() {
	describe('construction', function() {
		it('when you initialise a priority queue it should be empty', function() {
			var pq = new PriorityQ();
			assert.equal(pq.size(), 0);
			console.log(pq);
		});
	});
	describe('add', function() {
		it('when you add an item to the queue it should grow by 1');
		it('when you add items to a queue they should be in priority order');
	});
	describe('pop', function() {
		it('when you pop an item off the queue it should shrink by 1');
		it('when you pop an item off the queue it should be the next lowest priority');
	});
	describe('peek', function() {
		it('when you peek an item on the queue it should not affect the size of the queue');
		it('when you peek an item on the queue it should be the item in preferred priority order');
	});
	describe('clear', function() {
		it('when you clear the queue it should be empty');
	});
});