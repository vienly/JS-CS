'use strict';

const LinkedList = require('./LinkedList');

const testList = new LinkedList();

testList.append(5);
testList.append(10);

console.log(testList.toString());

testList.remove(1);

console.log(testList.toString());
