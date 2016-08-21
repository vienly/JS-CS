'use strict';

const BinarySearchTree = require('./BinarySearchTree');

var bst = new BinarySearchTree();

bst.insert(5);
bst.insert(2);
bst.insert(3);

console.log(bst);

console.log(bst.find(2, bst._root));
