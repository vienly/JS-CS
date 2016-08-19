'use strict';

const LinkedList = require('./linkedList');

let testList = new LinkedList();

testList.insertEnd(5);
testList.insertEnd(10);
testList.insertEnd(15);
testList.insertFront(0);

console.log(`\nlength: ${testList.length}\ndata: ${testList.toString()}`);

let testList2 = new LinkedList([1, 2, 3, 4, 5, 6]);

console.log(`\nlength: ${testList2.length}\ndata: ${testList2.toString()}`);
