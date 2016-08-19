'use strict';

const Node = require('./node');

function LinkedList(arr) {
  this.length = 0;
  this.head = null;

  if (!arr) {
    return this;
  }

  arr.forEach((item) => {
    this.insertEnd(item);
  });
  return this;

}

LinkedList.prototype.insertFront = function(value) {
  let newNode = new Node(value);

  if (!this.head) {
    this.head = newNode;
    this.length++;
    return newNode;
  }

  let tempt = this.head;
  this.head = newNode;
  newNode.next = tempt;
  return newNode;
};

LinkedList.prototype.insertEnd = function(value) {
  let newNode = new Node(value),
    currentNode = this.head;

  if (!currentNode) {
    this.head = newNode;
    this.length++;
    return newNode;
  }

  while (currentNode.next) {
    currentNode = currentNode.next;
  }

  currentNode.next = newNode;
  this.length++;
  return newNode;
};

LinkedList.prototype.toString = function() {
  let current = this.head;
  let str = '';

  if (!current)
    return ('empty list');

  while (current) {
    str += (current.data + ' => ');
    current = current.next;
  }

  str += 'end of list';

  return str;
};

module.exports = LinkedList;
