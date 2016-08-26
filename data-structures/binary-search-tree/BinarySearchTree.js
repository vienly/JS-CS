'use strict';

const Node = require('./Node');

function BinarySearchTree() {
  this._root = null;
}

BinarySearchTree.prototype = {
  insert: function(data) {
    function insertHelper(data, node) {
      if (!node) {
        node = new Node(data);
        return node;
      }

      if (data < node._data) {
        node._left = insertHelper(data, node._left);
      } else if (data > node._data) {
        node._right = insertHelper(data, node._right);
      }

      return node;
    }

    this._root = insertHelper(data, this._root);
  },


  delete: function(value) {
    this._root = deleteHelper(value, this._root);

    function minValue(node) {
      if (!node._left) {
        return node._data;
      }

      return minValue(node._left);
    }

    function deleteHelper(value, node) {
      if (!node) {
        return node; // value does not exist in tree
      }

      // moving down the tree to find the node to delete
      if (value < node._data) {
        node._left = deleteHelper(value, node._left);
      } else if (value > node._data) {
        node._right = deleteHelper(value, node._right);
      } else { // found node to delete
        // zero/one child case
        if (!node._left) {
          return node._right;
        } else if (!node._right) {
          return node._left;
        }

        // two children, take the min value from right subtree and assign it as your own
        node._data = minValue(node._right);

        // delete the node whose value you've taken
        node._right = deleteHelper(node._data, node._right);
      }
      return node;
    }
  },


  find: function(data) {
    function findHelper(data, node) {
      if (node._data === data || !node) {
        return node;
      } else if (data > node._data) {
        return findHelper(data, node._right);
      } else if (data < node._data) {
        return findHelper(data, node._left);
      }
    }

    return findHelper(data, this._root);
  },


  inorder: function() {
    function inorderHelper(node) {
      let str = '';
      if (node !== null) {
        str += inorderHelper(node._left);
        str += `${node._data}, `;
        str += inorderHelper(node._right);
      }
      return str;
    }

    return inorderHelper(this._root);
  },


  preorder: function() {
    function preorderHelper(node) {
      let str = '';
      if (node !== null) {
        str += `${node._data}, `;
        str += preorderHelper(node._left);
        str += preorderHelper(node._right);
      }
      return str;
    }

    return preorderHelper(this._root);
  },


  postorder: function() {
    function postorderHelper(node) {
      let str = '';
      if (node !== null) {
        str += postorderHelper(node._left);
        str += postorderHelper(node._right);
        str += `${node._data}, `;
      }
      return str;
    }

    return postorderHelper(this._root);
  },
};

module.exports = BinarySearchTree;
