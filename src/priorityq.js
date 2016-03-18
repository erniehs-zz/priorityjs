function PriorityQ(comp) {
	if (!comp) {
		throw 'comparator function required';
	}
	this.comp = comp;
	this.items = [];
}

PriorityQ.prototype.push = function(item) {
	throw 'not implemented yet';
};

PriorityQ.prototype.pop = function() {
	return this.items.pop();
};

PriorityQ.prototype.peek = function() {
	return this.items[0];
};

PriorityQ.prototype.size = function() {
	return this.items.length;
};

PriorityQ.prototype.clear = function() {
	this.items.clear();
};

PriorityQ.prototype.isEmpty = function() {
	return this.items.length === 0;
};

module.exports = PriorityQ;
