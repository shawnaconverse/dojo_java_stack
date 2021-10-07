class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

/**
 * Class that represents a stack using a singly linked list
 * Stacks follow a LIFO (Last In First Out) order where new Nodes are added
 * to the top (last element in the SLL) and removed from the top.
 * To navigate through a stack, we can ONLY use the pop and push methods.
 * We cannot use any form of runner as we did with a regular linked list
 */
class SLLStack {
  constructor() {
    this.head = null;
  }

  /**
   * Returns whether the stack is empty or not
   * @returns {boolean} is the stack empty true/false
   */
  isEmpty() {
    return this.head === null;
  }

  /**
   * Returns the size of the stack
   * @returns {number} the size of the stack
   */
  size() {
    let len = 0;
    let runner = this.head;

    while (runner) {
      len += 1;
      runner = runner.next;
    }
    return len;
  }

  /**
   * Takes a node and adds it to the top of the stack
   * @param {Node} newNode the new node that is to be pushed to the top of the stack
   */
  push(newNode) {
    if (this.head === null) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  /**
   * Removes the Node at the top of the stack and returns it
   * @returns {Node} the node that was removed
   */
  pop() {
    if (this.head === null) {
      return null;
    }

    const removed = this.head;
    this.head = this.head.next;

    return removed;
  }

  /**
   * Returns the node at the top of the stack without removing
   * @returns {Node} the node at the top of the stack
   */
  peek() {
    return this.head ? this.head.data : null;
  }

  // EXTRA
  /**
   * Goes through the stack to see if it contains the value.
   * Bonus: follow the concept of a stack and only use pop and push.
   * By the end of the function, the stack should be in the original order it started in.
   * It is only to use another stack.
   * @param {any} value a value to search for in the stack
   * @returns {boolean} true/false whether the value is in the stack
   */
  contains(value) {
    let runner = this.head;

    while (runner) {
      if (runner.data === val) {
        return true;
      }
      runner = runner.next;
    }
    return false;
  }

  // EXTRA
  /**
   * Goes through the stack to print out all the values
   * Bonus: follow the concept of a stack and only use pop and push.
   * By the end of the function, the stack should be in the original order it started in.
   * It is only to use another stack.
   */
  print() {
    let runner = this.head;
    let vals = "";

    while (runner) {
      vals += `${runner.data}${runner.next ? ", " : ""}`;
      runner = runner.next;
    }
    console.log(vals);
    return vals;
  }
}

/**
 * Class that represents a queue using a singly linked list
 * Stacks follow a FIFO (First In First Out) order where new Nodes are added
 * to the back (last element in the SLL) and removed from the top (first element in the SLL)
 * When using a Queue, we can only add and remove items by using the enqueue and dequeue methods
 */
class SLQueue {
  /**
   * Method that instantiates the SLQueue object
   * this.head points to the front of the queue
   * this.tail points to the back of the queue
   * this.size tracks the size. we need to make sure we increment or decrement
   * this.size when we enqueue or dequeue
   */
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  /**
   * Returns whether the queue is empty or not
   * @returns {boolean} is the queue empty true/false
   */
  isEmpty() {
    return this.head !== null;
  }

  /**
   * Returns the size of the queue
   * @returns {number} the size of the queue
   */
  size() {}

  /**
   * Takes a node and adds it to the top of the queue
   * @param {Node} newNode the new node that is to be pushed to the back of the queue
   */
  enqueue(newNode) {}

  /**
   * Removes the Node at the front of the queue and returns it
   * @returns {Node} the node that was removed
   */
  dequeue() {}

  /**
   * Returns the node at the front of the queue without removing
   * @returns {Node} the node at the top of the queue
   */
  front() {}

  // EXTRA
  /**
   * Goes through the queue to see if it contains the value.
   * Bonus: follow the concept of a queue and only use enqueue and dequeue.
   * By the end of the function, the queue should be in the original order it started in.
   * It is only to use another queue.
   * @param {any} value a value to search for in the queue
   * @returns {boolean} true/false whether the value is in the queue
   */
  contains(value) {}

  // EXTRA
  /**
   * Goes through the queue to print out all the values
   * Bonus: follow the concept of a queue and only use enqueue and dequeue.
   * By the end of the function, the queue should be in the original order it started in.
   * It is only to use another queue.
   */
  print() {}

  /**
   * Enqueues each of the given items.
   * - Time: O(n) linear since enqueue is O(1), n = vals.length.
   * - Space: O(1) constant.
   * @param {Array<any>} vals
   */
  seed(vals) {
    vals.forEach((val) => this.enqueue(new Node(val)));
  }

  /**
   * Compares this queue to another given queue to see if they are equal.
   * Avoid indexing the queue items directly via bracket notation, use the
   * queue methods instead for practice.
   * Use no extra array or objects.
   * The queues should be returned to their original order when done.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Queue} q2 The queue to be compared against this queue.
   * @returns {boolean} Whether all the items of the two queues are equal and
   *    in the same order.
   */
  compareQueues(q2) {}

  /**
   * Determines if the queue is a palindrome (same items forward and backwards).
   * Avoid indexing queue items directly via bracket notation, instead use the
   * queue methods for practice.
   * Use only 1 stack as additional storage, no other arrays or objects.
   * The queue should be returned to its original order when done.
   * - Time: O(?).
   * - Space: O(?).
   * @returns {boolean}
   */
  isPalindrome() {}
}
