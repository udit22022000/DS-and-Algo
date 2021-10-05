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

  //insert node at middle....2 pointer---Important concept..
  //Runner technique..in which there are 2 runers ... a fast runner(2x speed) and a slow runner(x speed)...
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

  //MERGE SORT..
  //Break linked list into 2

  merge2LL(head1, head2) {
    if (head1 == null) {
      return head2;
    }
    if (head2 == null) {
      return head1;
    }

    if (head1.data < head2.data) {
      head1.next = this.merge2LL(head1.next, head2);
      return head1;
    } else {
      head2.next = this.merge2LL(head1, head2.next);
      return head2;
    }
  }

  breakInto2(node) {
    var slow = node;
    var fast = node;
    while (fast.next != null && fast.next.next != null) {
      slow = slow.next;
      fast = fast.next.next;
    }
    var node2 = slow.next;
    slow.next = null;
    return [node, node2];
  }

  mergeSort(node = this.head) {
    if (node == null || node.next == null) {
      return node;
    }
    var [node1, node2] = this.breakInto2(node);
    var head1 = this.mergeSort(node1);
    var head2 = this.mergeSort(node2);
    var mergedList = this.merge2LL(head1, head2);
    return mergedList;
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

var LLObj = new LinkedList();
LLObj.createLinkedList([1, 2, 4, 3, 2, 1, 7, 8, 10, 5, 9, 6]);
LLObj.mergeSort();
LLObj.printLinkedList();
