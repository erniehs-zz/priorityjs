(function(exports) {
	'use strict';

	function PriorityQ(comp) {
		if (!comp || comp.length != 2) {
			throw 'a valid comparator function required';
		}
		this.comp = comp;
		this.items = [];
	}

	PriorityQ.prototype.push = function(item) {
		for(var i = 0; i < this.items.length; i++) {
			if (this.comp(item, this.items[i])) {
				this.items.splice(i, 0, item);
				return;
			}
		}
		this.items[i] = item;
	};

	PriorityQ.prototype.pop = function() {
		return this.items.shift();
	};

	PriorityQ.prototype.peek = function() {
		return this.items[0];
	};

	PriorityQ.prototype.size = function() {
		return this.items.length;
	};

	PriorityQ.prototype.clear = function() {
		this.items = [];
	};

	PriorityQ.prototype.isEmpty = function() {
		return this.items.length === 0;
	};

	exports.PriorityQ = PriorityQ;

})(typeof exports === 'undefined' ? this.queue = {} : exports);
