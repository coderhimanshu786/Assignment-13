//Complexity-
//Time Complexity: O(n)
//Auxiliary Space: O(1)

// A node of the doubly linked list
class Node {
		constructor() {
			this.data = 0;
			this.prev = null;
			this.next = null;
		}
	}
let head = null;

	// Function to delete a node in a Doubly Linked List
	function deleteNode(del) {
		// base case
		if (head == null || del == null)
			return null;

		// If node to be deleted is head node
		if (head == del)
			head = del.next;

		// Change next only if node to be deleted is NOT the last node
		if (del.next != null)
			del.next.prev = del.prev;

		// Change prev only if node to be deleted is NOT the first node
		if (del.prev != null)
			del.prev.next = del.next;

		del = null;

		return head;
	}

	// Function to delete the node at the given position in the doubly linked list
	function deleteNodeAtGivenPos(n) {
		//if list in NULL or invalid position is given
		if (head == null || n <= 0)
			return;

let current = head;
		let i;

		//traverse up to the node at position 'n' from the beginning
		
		for (i = 1; current != null && i < n; i++) {
			current = current.next;
		}

		// if 'n' is greater than the number of nodes in the doubly linked list
		if (current == null)
			return;

		// delete the node pointed to by 'current'
		deleteNode(current);
	}

	// Function to insert a node at the beginning of the Doubly Linked List
	function push(new_data) {
		// allocate node
let new_node = new Node();

		// put in the data
		new_node.data = new_data;

		// since we are adding at the beginning, prev is always NULL
		new_node.prev = null;

		// link the old list of the new node
		new_node.next = head;

		// change prev of head node to new node
		if (head != null)
			head.prev = new_node;

		// move the head to point to the new node
		head = new_node;
	}

	// Function to print nodes in a given doubly linked list
	function printList() {
let temp = head;
		if (temp == null)
			console.log("Doubly Linked list empty");

		while (temp != null) {
			console.log(temp.data + " ");
			temp = temp.next;
		}
		console.log();
	}

    //Example-1 
        // push(4);
		// push(3);
		// push(1);

        // console.log("Doubly linked " + "list before deletion:<br/>");
		// printList();

		// let n = 3;
//------------------------------------------------
    //Example-2
		// Create the doubly linked list: LinkedList = 1 <--> 3 <--> 4

		push(9);
		push(2);
		push(5);
		push(1);

		console.log("Doubly linked " + "list before deletion:<br/>");
		printList();

		let n = 1;

		// delete node at the given position 'n'
		deleteNodeAtGivenPos(n);
		console.log("<br/>Doubly linked " + "list after deletion:<br/>");
		printList();
