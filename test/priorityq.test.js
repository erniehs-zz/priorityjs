var assert = require('assert');
var queue = require('../src/priorityq');
var expect = require('expect');

describe('priority queue', function() {
	describe('construction', function() {
		it('when you initialise a priority queue a comparator with 2 arguments should be supplied', function() {
			expect(function(){
				var pq = new queue.PriorityQ(function(){});
			}).toThrow('a valid comparator function required');
			expect(function(x){
				var pq = new queue.PriorityQ();
			}).toThrow('a valid comparator function required');
			expect(function(x, y, z){
				var pq = new queue.PriorityQ();
			}).toThrow('a valid comparator function required');
		});
		it('when you initialise a priority queue it should be empty', function() {
			var pq = new queue.PriorityQ(function(x, y){});
			assert.equal(pq.size(), 0);
		});
	});
	describe('push', function() {
		it('when you push an item on the queue it should grow by 1', function() {
			var pq = new queue.PriorityQ(function(x, y){});
			assert.equal(pq.size(), 0);
			pq.push('ernie');
			assert.equal(pq.size(), 1);
			pq.push('ernie again');
			assert.equal(pq.size(), 2);
		});
	});
	describe('pop', function() {
		it('when you pop an item off the queue it should shrink by 1', function() {
			var pq = new queue.PriorityQ(function(x, y){});
			pq.push('ernie');
			pq.push('ernie, again');
			assert.equal(pq.size(), 2);
			pq.pop();
			assert.equal(pq.size(), 1);
			pq.pop();
			assert.equal(pq.size(), 0);
		});
		it('when you pop an item off the queue it should be the next item in the preferred priority order', function() {
			var pq = new queue.PriorityQ(function(x, y){ return x < y; });
			pq.push(4);
			pq.push(2);
			pq.push(8);
			assert.equal(pq.pop(), 2);
			assert.equal(pq.pop(), 4);
			assert.equal(pq.pop(), 8);
		});
	});
	describe('peek', function() {
		it('when you peek an empty queue you should get undefined', function() {
			var pq = new queue.PriorityQ(function(x, y){});
			assert.strictEqual(pq.peek(), undefined);
		});
		it('when you peek an item on the queue it should not affect the size of the queue', function() {
			var pq = new queue.PriorityQ(function(x, y){});
			pq.push('ernie');
			pq.push('ernie, again');
			assert.equal(pq.size(), 2);
			pq.peek();
			assert.equal(pq.size(), 2);
			pq.peek();
			pq.peek();
			assert.equal(pq.size(), 2);
		});
		it('when you peek an item on the queue it should be the item in preferred priority order', function(){
			var pq = new queue.PriorityQ(function(x, y){ return x < y; });
			pq.push(4);
			pq.push(2);
			pq.push(-1);
			assert.equal(pq.peek(), -1);
		});
	});
	describe('clear', function() {
		it('when you clear the queue it should be empty', function() {
			var pq = new queue.PriorityQ(function(x, y){});
			pq.push('ernie');
			pq.push('ernie, again');
			assert.equal(pq.isEmpty(), false);
			pq.clear();
			assert.equal(pq.isEmpty(), true);
		});
	});
});
