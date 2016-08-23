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


  delete: function(data) {

    //   const childCount = (node._left !== null ? 1 : 0) + (node._right !== null ? 1 : 0);

    // const node = this.find(data, this._root);
    // if (node) {
    //
    //   if (node === this._root) {
    //
    //   }
    // }
  },
};

module.exports = BinarySearchTree;
