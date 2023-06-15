

// Javascript program to remove duplicates from a sorted linked list
	
	/* Linked list Node*/
	class Node
	{
		constructor(d) {
			this.data = d;
			this.next = null;
		}
	}
	
	let head=new Node(); // head of list
	function removeDuplicates()
	{
		/*Another reference to head*/
		let curr = head;

		/* Traverse list till the last node */
		while (curr != null) {
			let temp = curr;
			/*Compare current node with the next node and keep on deleting them until it matches the current node data */
			while(temp!=null && temp.data==curr.data) {
				temp = temp.next;
			}
			/*Set current node next to the next different element denoted by temp*/
			curr.next = temp;
			curr = curr.next;
		}
	}
	
	/* Utility functions */

	/* Inserts a new Node at front of the list. */
	function push(new_data)
	{
		/* 1 & 2: Allocate the Node & Put in the data*/
		let new_node = new Node(new_data);

		/* 3. Make next of new Node as head */
		new_node.next = head;

		/* 4. Move the head to point to new Node */
		head = new_node;
	}
	
	/* Function to print linked list */
	function printList()
	{
		let temp = head;
		while (temp != null && temp.data)
		{
			
			console.log(temp.data+" ");
			temp = temp.next;
		}
		console.log("<br>");
	}
	
	/*Q to remove duplicate elements (11->11->11->21->43->43->60) */
    //Example-1
	// push(11)
	// push(11)
	// push(11)
	// push(21)
	// push(43)
	// push(43)
	// push(60)
	
    // Example-2
    push(10)
	push(12)
	push(12)
	push(12)
	push(25)
	push(25)
	push(34)

    //Print after remove duplicates
	console.log("List before removal of duplicates ");
	printList();
		
	removeDuplicates();
		
	console.log("List after removal of duplicate elements ");
	printList();
