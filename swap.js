// First we declare both classes:

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Inside this class we declare all the helper functions we need:

  insertFirst(data) {
    const node = new Node(data, this.head)
    this.head = node;
  }

  getAt(index) {
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }
    return null;
  }

  getLast() {
    let node = this.head;
    while (node && node.next) {
      node = node.next;
    }
    return node;
  }

  insertAt(data, index) {
    let node = new Node(data);
    if (!this.head) {
      this.head = node;
      return;
    }
    if (index === 0) {
      node.next = this.head;
      this.head = node;
      return;
    }
    if (index >= this.size()) {
      this.getLast().next = node;
      return;
    }
    const previous = this.getAt(index - 1);
    node.next = previous.next;
    previous.next = node;
    return;
  }

  removeAt(index) {
    if (!this.head) {
      return;
    }
    if (index === 0) {
      this.head = this.head.next;
      return;
    }
    const previous = this.getAt(index - 1);
    previous && previous.next ? previous.next = previous.next.next : null;
  }

  size() {
    let counter = 0;
    let node = this.head;
    while (node) {
      counter++;
      node = node.next;
    }
    return counter;
  }
}

// Then we declare a sample linked list and populate it with nodes:

let list = new LinkedList();
list.insertFirst(3);
list.insertFirst(6);
list.insertFirst(9);
list.insertFirst(14);
list.insertFirst(2);
list.insertFirst(1);
list.insertFirst(8);
list.insertFirst(5);
list.insertFirst(11);

console.log(list);

// Here is the actual swap function: 

function swap(l) {
  let counter = 0;
  let first = l.getAt(counter);
  let second = l.getAt(counter + 1);
  while(counter < l.size()) {
    l.insertAt(first.data, counter + 2);
    l.removeAt(counter);
    first = l.getAt(counter + 2);
    second = l.getAt(counter + 3);
    counter += 2;
  }
  return l;
}

console.log(swap(list));
