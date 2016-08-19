'use strict';

const Node = require('./Node');

function DoublyLinkedList() {
  this._length = 0;
  this._head = null;
  this._tail = null;
}

DoublyLinkedList.prototype = {
  append: function (data) {
    const node = new Node(data);

    if (this._length === 0) {
      this._head = node;
      this._tail = node;
    } else {
      this._tail.next = node;
      node.prev = this._tail;
      this._tail = node;
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

      if (index === 0) {
        this._head = current.next;

        if (!this._head) {
          this._tail = null;
        } else {
          this._head.prev = null;
        }

      } else if (index === this._length - 1) {
        current = this._tail;
        this._tail = current.prev;
        this._tail.next = null;
      } else {

        for (let i = 0; i < index; i++) {
          current = current.next;
        }

        current.prev.next = current.next;
        current.next.prev = current.prev;
      }

      this._length--;

      return current.data;

    } else {
      return null;
    }
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
