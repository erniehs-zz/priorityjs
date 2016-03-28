# Priority Queue
This is a very simple to use javascript implementation of a priority queue.  Use as follows,

```javascript
var queue = require('../src/priorityq');

var pq = new queue.PriorityQ(function(x, y){ return x < y; });
pq.push(4);
pq.push(2);
pq.push(8);

pq.peek(); // peek 2, 4, 8 etc.

pq.pop();  // pop (remove) 2, 4, 8 etc.

pq.clear();  // reset
...
```
