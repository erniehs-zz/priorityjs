function PriorityQ() {
	this.items = [];
}

PriorityQ.prototype.push = function(item) {
	this.items.push(item);
};

PriorityQ.prototype.pop = function() {
	return this.items.shift();
};

PriorityQ.prototype.peek = function() {
	return this.items.peek();
};

PriorityQ.prototype.size = function() {
	return this.items.length;
};

PriorityQ.prototype.isEmpty = function() {
	return this.items.length === 0;
};

module.exports = PriorityQ;
