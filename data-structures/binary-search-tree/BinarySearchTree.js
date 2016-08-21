'use strict';

const Node = require('./Node');

function BinarySearchTree() {
  this._root = null;
}

BinarySearchTree.prototype = {
  insert: function(data) {
    const node = new Node(data);

    if (this._root === null) {
      this._root = node;
    } else {
      let current = this._root;

      while (1) {
        if (data < current._data) {
          if (!current._left) {
            current._left = node;
            return;
          } else {
            current = current._left; // traverse down left side
          }
        } else if (data > current._data) {
          if (!current._right) {
            current._right = node;
            return;
          } else {
            current = current._right; // traverse down right side
          }
        } else {
          return; // ignore duplicates
        }
      }
    }
  },

  find: function(data, searchNode) {
    if (searchNode._data === data || !searchNode) {
      return searchNode;
    } else if (data > searchNode._data) {
      return this.find(data, searchNode._right);
    } else if (data < searchNode._data) {
      return this.find(data, searchNode._left);
    }
  },

  delete: function(data) {
    const node = this.find(data, this._root);
    if (node) {
      
    }
  },
};

module.exports = BinarySearchTree;
