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

// console.log('inorder: ', bst.inorder());
// console.log('preorder: ', bst.preorder());
// console.log('postorder: ', bst.postorder());
//
// bst.delete(5)
// console.log('inorder: ', bst.inorder());


var bst2 = new BinarySearchTree();

bst2.insert(50);
bst2.insert(30);
bst2.insert(20);
bst2.insert(40);
bst2.insert(70);
bst2.insert(60);
bst2.insert(80);

console.log('bst2 inorder: ', bst2.inorder());

bst2.delete(20);
console.log('bst2 deleted 20');

console.log('bst2 inorder: ', bst2.inorder());

bst2.delete(70);
console.log('bst2 deleted 70');

console.log('bst2 inorder: ', bst2.inorder());
