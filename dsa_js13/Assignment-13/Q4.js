//complexity-
//Time Complexity: O(n)
//Auxiliary Space: O(1)


// JavaScript program to reverse alternate k nodes in a linked list
class Node
{
	constructor(d)
	{
		this.data = d;
		this.next = null;
	}
}

let head;

// Reverses alternate k nodes and returns the pointer to the new head node
function kAltReverse(node, k)
{
	let current = node;
	let next = null, prev = null;
	let count = 0;

	/*1) reverse first k nodes of the linked list */
	while (current != null && count < k)
	{
		next = current.next;
		current.next = prev;
		prev = current;
		current = next;
		count++;
	}

	/* 2) Now head points to the kth node. So change next of head to (k+1)th node*/
	if (node != null)
	{
		node.next = current;
	}

	/* 3) We do not want to reverse next k nodes.So move the current pointer to skip next k nodes */
	count = 0;
	while (count < k - 1 && current != null)
	{
		current = current.next;
		count++;
	}

	/* 4) Recursively call for the list starting from current->next. And make rest of the list as next of first node */
	if (current != null)
	{
		current.next = kAltReverse(current.next, k);
	}

	/* 5) prev is new head of the input list */
	return prev;
}

function printList(node)
{
	while (node != null)
	{
		console.log(node.data + " ");
		node = node.next;
	}
}

function push(newdata)
{
	let mynode = new Node(newdata);
	mynode.next = head;
	head = mynode;
}


// Creating the linkedlist  Q- 1->2->3->4->5->6->7->8->9->NULL and k = 3
for(let i = 8; i > 0; i--)
{
	push(i);
}
console.log("Given Linked List :<br>");
printList(head);
head = kAltReverse(head, 3);

console.log("<br>");
console.log("Modified Linked List :<br>");
printList(head);

