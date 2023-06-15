//complexity-
//Time Complexity: O(n)
//Auxiliary Space: O(1)

// Representation of node
class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}
// Function to insert node in a linked list
function insert(root, item) {
  let ptr, temp;
  temp = new Node();
  temp.data = item;
  temp.next = null;

  if (root == null) root = temp;
  else {
    ptr = root;
    while (ptr.next != null) ptr = ptr.next;

    ptr.next = temp;
  }
  return root;
}

// Function which returns new linked list
function newList(root1, root2) {
 let ptr1 = root1,
    ptr2 = root2,
    ptr;
  let root = null,
    temp;

  while (ptr1 != null) {
    temp = new Node();
    temp.next = null;

    // Compare for greater node
    if (ptr1.data < ptr2.data) temp.data = ptr2.data;
    else temp.data = ptr1.data;

    if (root == null) root = temp;
    else {
      ptr = root;
      while (ptr.next != null) ptr = ptr.next;

      ptr.next = temp;
    }
    ptr1 = ptr1.next;
    ptr2 = ptr2.next;
  }
  return root;
}

function display(root) {
  while (root != null) {
    console.log(root.data + "->");
    root = root.next;
  }
  console.log("<br/>");
}

(root1 = null), (root2 = null), (root = null);
//Example - 1 Q - Input: list1 = 5->2->3->8 /list2 = 1->7->4->5

// First linked list
// root1 = insert(root1, 5);
// root1 = insert(root1, 2);
// root1 = insert(root1, 3);
// root1 = insert(root1, 8);

// console.log("First List: ");
// display(root1);

// Second linked list
// root2 = insert(root2, 1);
// root2 = insert(root2, 7);
// root2 = insert(root2, 4);
// root2 = insert(root2, 5);

// console.log("Second List: ");
// display(root2);

// Example -2 Input:list1 = 2->8->9->3 / list2 = 5->3->6->4

// First linked list
root1 = insert(root1, 2);
root1 = insert(root1, 8);
root1 = insert(root1, 9);
root1 = insert(root1, 3);
console.log("First List: ");
display(root1);


//Second linked list
root2 = insert(root2, 5);
root2 = insert(root2, 3);
root2 = insert(root2, 6);
root2 = insert(root2, 4);

//Print node new linked list
console.log("Second List: ");
display(root2);

root = newList(root1, root2);
console.log("New List: ");
display(root);
