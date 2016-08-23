'use strict';

const BinarySearchTree = require('./BinarySearchTree');

var bst = new BinarySearchTree();

bst.insert(5);
bst.insert(2);
bst.insert(3);
bst.insert(1);
bst.insert(7);
bst.insert(18);
bst.insert(9);

console.log(bst.find(1));

console.log('inorder: ', bst.inorder());
console.log('preorder: ', bst.preorder());
console.log('postorder: ', bst.postorder());
