// Complexity- 

// Time Complexity: O(n). 
// Traversal of list is done only once and it has ‘n’ elements.
// Auxiliary Space: O(n/k). where  k is an input to the function
// For each Linked List of size n, n/k or (n/k)+1 calls will be made during the recursion


let head; // head of list

	/* Linked list Node */
	class Node {
			constructor(val) {
				this.data = val;
				this.next = null;
			}
		}

	function reverse(head , k) {
		if (head == null)
			return null;
		let current = head;
		let next = null;
		let prev = null;

		let count = 0;

		/* Reverse first k nodes of linked list */
		while (count < k && current != null) {
			next = current.next;
			current.next = prev;
			prev = current;
			current = next;
			count++;
		}

		//next is now a pointer to (k+1)th node Recursively call for the list starting from current. And make rest of the list as next of first node
		
		if (next != null)
			head.next = reverse(next, k);

		// prev is now head of input list
		return prev;
	}

	/* Utility functions */

	/* Inserts a new Node at front of the list. */
	function push(new_data) {
		// 1 & 2: Allocate the Node & Put in the data
		new_node = new Node(new_data);

		// 3. Make next of new Node as head */
		new_node.next = head;

		// 4. Move the head to point to new Node */
		head = new_node;
	}

	// Function to print linked list
	function printList() {
		temp = head;
		while (temp != null) {
			console.log(temp.data + " ");
			temp = temp.next;
		}
		console.log("<br/>");
	}

		// Example-1 Constructed Linked List is (1->2->2->4->5->6-> 7->8->null)
		// push(8);
		// push(7);
		// push(6);
		// push(5);
		// push(4);
		// push(2);
		// push(2);
		// push(1);

		// console.log("Given Linked List<br/>");
		// printList();

		// head = reverse(head, 4);


        // Example-2  LinkedList: 1->2->3->4->5 / K = 3

		push(5);
		push(4);
		push(2);
		push(2);
		push(1);

		console.log("Given Linked List<br/>");
		printList();

		head = reverse(head, 3);

		console.log("Reversed list<br/>");
		printList();

