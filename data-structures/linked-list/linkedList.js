'use strict';

const Node = require('./Node');

function LinkedList() {
  this._length = 0;
  this._head = null;
}

LinkedList.prototype = {
  append: function(data) {
    const node = new Node(data);

    if (this._head === null) {
      this._head = node;
    } else {
      var current = this._head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }

    this._length++;
  },

  get: function(index) {
    if (index > -1 && index < this._length) {
      var current = this._head;

      for (let i = 0; i < index; i++) {
        current = current.next;
      }

      return current.data;
    } else {
      return null;
    }
  },

  remove: function(index) {
    if (index > -1 && index < this._length) {
      var current = this._head;
      var previous;

      if (index === 0) {
        this._head = current.next;
      } else {
        for (let i = 0; i < index; i++) {
          previous = current;
          current = current.next;
        }

        previous.next = current.next;
      }

      this._length--;
    }

    return current.data;
  },

  toArray: function() {
    var result = [];
    var current = this._head;

    while (current) {
      result.push(current.data);
      current = current.next;
    }

    return result;
  },

  toString: function() {
    return this.toArray().join(', ');
  },
};

module.exports = LinkedList;
