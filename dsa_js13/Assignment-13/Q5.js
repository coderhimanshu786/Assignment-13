//Complexity-
//Time Complexity: O(n)
//Auxiliary Space: O(1)

// linked list
class Node
{
	constructor(key)
	{
		this.key = key;
		this.next = null;
	}
}

function deleteLast(head, key)
{
	
	// Initialize previous of Node to be deleted
	let x = null;

	// Start from head and find the Node to be deleted
	let temp = head;
	
	while (temp != null)
	{
		
		// If we found the key, update xv
		if (temp.key == key)
			x = temp;

		temp = temp.next;
	}

	// key occurs at-least once
	if (x != null)
	{
		
		// Copy key of next Node to x
		x.key = x.next.key;

		// Store and unlink next
		temp = x.next;
		x.next = x.next.next;

		// Free memory for next
	}
	return head;
}

// This function prints contents of linked list starting from the given Node
function printList(node)
{
	while (node != null)
	{
		console.log(node.key + " ");
		node = node.next;
	}
}

// Q- to 
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(5);
head.next.next.next.next = new Node(2);
head.next.next.next.next.next = new Node(10);

console.log("Created Linked List: <br>");
printList(head);
deleteLast(head, 2);

console.log("<br>Linked List after " + "Deletion of 2: <br>");
printList(head);
