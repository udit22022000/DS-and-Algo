class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  //creating a linked list...
  createLinkedList(li) {
    let temp2 = this.head;
    for (let i = 0; i < li.length; i++) {
      let temp = new Node(li[i]);
      if (temp2 == null) {
        this.head = temp;
        temp2 = this.head;
      } else {
        temp2.next = temp;
        temp2 = temp2.next;
      }
    }
  }

  // push front..
  pushFront(data) {
    let newNode = new Node(data);
    if (this.head == null) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  //push back...
  pushBack(data) {
    let temp = this.head;
    let newNode = new Node(data);
    if (temp == null) {
      this.head = newNode;
    } else {
      while (temp.next != null) {
        temp = temp.next;
      }
      temp.next = newNode;
    }
  }

  //insert a node...
  insert(data, pos) {
    if (pos == 0 || this.isEmpty()) {
      this.pushFront(data);
    } else {
      let newNode = new Node(data);
      let temp = this.head;
      for (let i = 0; i < pos - 1; i++) {
        temp = temp.next;
      }
      let temp2 = temp.next;
      temp.next = newNode;
      newNode.next = temp2;
    }
  }

  //delete a node
  deleteNode(pos) {
    if (this.isEmpty()) {
      console.log("empty linked list");
    } else {
      if (pos == 0) {
        this.head = this.head.next;
      } else {
        let temp = this.head;
        for (let i = 0; i < pos - 1; i++) {
          temp = temp.next;
        }
        temp.next = temp.next.next;
      }
    }
  }

  //iterative reverse...
  reverse() {
    var curr = this.head;
    var prev = null;
    while (curr != null) {
      var temp = curr.next;
      curr.next = prev;
      prev = curr;
      curr = temp;
    }
    this.head = prev;
  }

  //recursive reverse..
  reverse2(data = this.head) {
    if (data.next == null) {
      this.head = data;
      return data;
    }

    var small = this.reverse2(data.next);
    data.next = null;
    small.next = data;
    return data;
  }

  //kth last element ---- 2pointer....***Important concept..
  KthLast(point) {
    var p1 = this.head;
    var p2 = this.head;
    var count = 0;
    while (p1 != null) {
      if (count == point) {
        p2 = p2.next;
        count -= 1;
      }
      p1 = p1.next;
      count += 1;
    }

    console.log("Kth last node", p2.data);
  }

  //alternate merge 2 linked list...
  alternateMerge(p2) {
    var p1 = this.head;
    var p1prev = null;
    while (p1 != null && p2 != null) {
      var temp1 = p1.next;
      var temp2 = p2.next;
      p1.next = p2;
      p2.next = temp1;
      p2 = temp2;
      p1prev = p1;
      p1 = temp1;
    }

    if (p2 != null) {
      p1prev.next = p2;
    }

    this.printLinkedList(p1);
  }

  //insert node at middle....2 pointer---Important concept...
  insertAtMiddle(data) {
    var p1 = this.head;
    var p2 = this.head;
    var newNode = new Node(data);
    while (p1.next != null && p1.next.next != null) {
      p1 = p1.next.next;
      p2 = p2.next;
    }
    var temp = p2.next;
    p2.next = newNode;
    newNode.next = temp;
  }

  // kreversehelper1 , kreversehelper2 and kreverse are iin one group...
  KReverseHelper2(node) {
    if (node.next == null) {
      return node;
    }

    var small = this.KReverseHelper2(node.next);
    small.next = node;
    node.next = null;
    return node;
  }

  KReverseHelper1(k, head) {
    if (head == null) {
      return null;
    }

    var tail = head;
    var count = 0;
    while (count < k - 1) {
      if (tail.next == null) {
        break;
      }
      tail = tail.next;
      count += 1;
    }

    var newHead = tail.next;
    tail.next = null;
    var smallhead = this.KReverseHelper1(k, newHead);
    this.KReverseHelper2(head);
    head.next = smallhead;
    return tail;
  }

  KReverse(k = 1) {
    this.head = this.KReverseHelper1(k, this.head);
  }

  //get head of a linked list...
  getHead() {
    return this.head;
  }

  //check empty or not...
  isEmpty() {
    return this.head == null;
  }

  // print a linked list...
  printLinkedList() {
    var temp = this.head;
    let str = "";
    while (temp != null) {
      str += temp.data;
      if (temp.next != null) {
        str += " --> ";
      }
      temp = temp.next;
    }
    console.log(str);
  }
}

//merge 2 linked list...and return a new list...
function merge2LL2(p1, p2) {
  if (p1 == null) {
    var smallNode1 = null;
    var smallNode2 = null;
    while (p2 != null) {
      var newNode = new Node(p2.data);
      if (smallNode1 == null) {
        smallNode1 = newNode;
        smallNode2 = newNode;
      } else {
        smallNode2.next = newNode;
        smallNode2 = smallNode2.next;
      }
      p2 = p2.next;
    }
    return smallNode1;
  }
  if (p2 == null) {
    var smallNode1 = null;
    var smallNode2 = null;
    while (p1 != null) {
      var newNode = new Node(p1.data);
      if (smallNode1 == null) {
        smallNode1 = newNode;
        smallNode2 = newNode;
      } else {
        smallNode2.next = newNode;
        smallNode2 = smallNode2.next;
      }
      p1 = p1.next;
    }
    return smallNode1;
  }

  if (p1.data < p2.data) {
    var newNode = new Node(p1.data);
    newNode.next = merge2LL2(p1.next, p2);
  } else {
    var newNode = new Node(p2.data);
    newNode.next = merge2LL2(p1, p2.next);
  }
  return newNode;
}

function merge2LL1(p1, p2) {
  var newLL = new LinkedList();
  newLL.head = merge2LL2(p1, p2);
  return newLL;
}

var LLObj = new LinkedList();
LLObj.createLinkedList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
LLObj.printLinkedList();
LLObj.KReverse(2);
LLObj.printLinkedList();

var ll1 = new LinkedList();
ll1.createLinkedList([1, 5, 7, 10]);
var ll2 = new LinkedList();
ll2.createLinkedList([2, 3, 6]);

//merge 2 linked list....and return a new list...
var newList = merge2LL1(ll1.getHead(), ll2.getHead());
newList.printLinkedList();
