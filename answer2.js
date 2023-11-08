class Node {
  constructor(key, value, weight) {
    this.key = key;
    this.value = value;
    this.weight = weight;
    this.prev = null;
    this.next = null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.size = 0;
    this.cache = new Map();
    this.head = new Node(null, null, null);
    this.tail = new Node(null, null, null);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  get(key) {
    if (this.cache.has(key)) {
      const node = this.cache.get(key);
      this.updateNode(node);
      return node.value;
    }
    return -1;
  }

  put(key, value, weight) {
    if (this.cache.has(key)) {
      const node = this.cache.get(key);
      node.value = value;
      node.weight = weight;
      this.updateNode(node);
    } else {
      const newNode = new Node(key, value, weight);
      this.cache.set(key, newNode);
      this.addNode(newNode);
      this.size++;
      if (this.size > this.capacity) {
        const removedNode = this.removeTail();
        this.cache.delete(removedNode.key);
        this.size--;
      }
    }
  }

  updateNode(node) {
    this.removeNode(node);
    this.addNode(node);
  }

  addNode(node) {
    const prevNode = this.head;
    const nextNode = this.head.next;
    prevNode.next = node;
    node.prev = prevNode;
    node.next = nextNode;
    nextNode.prev = node;
  }

  removeNode(node) {
    const prevNode = node.prev;
    const nextNode = node.next;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
  }

  removeTail() {
    const node = this.tail.prev;
    this.removeNode(node);
    return node;
  }
}
