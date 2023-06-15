//Complexity
//Time Complexity: O(N + M), where N and M are the size of list1 and list2 respectively
//Auxiliary Space: O(1)

// Link List node
class Node{
	constructor(key){
		this.key = key;
		this.next = null;
	}
}

function newNode(key){
	let temp = new Node(key);
	return temp;
}
// Example-1
// let us create two sorted linked lists to test the above function -
// a: 5->10->15->40
// b: 2->3->20

// let a = newNode(5);
// a.next = newNode(10);
// a.next.next = newNode(15);
// a.next.next.next = newNode(40);

// let b = newNode(2);
// b.next = newNode(3);
// b.next.next = newNode(20);

//Example-2
// a: 1->1
// b: 2->4

let a = newNode(1);
a.next = newNode(1);

let b = newNode(2);
b.next = newNode(4);

let v = [];
while(a != null){
	v.push(a.key);
	a = a.next;
}

while(b != null){
	v.push(b.key);
	b = b.next;
}

v.sort(function(a, b){return a - b});
let result = newNode(-1);
let temp = result;
for(let i = 0; i<v.length; i++){
	result.next = newNode(v[i]);
	result = result.next;
}
temp = temp.next;
console.log("Resultant Merge Linked List is : ");
while(temp != null){
	console.log(temp.key + " ");
	temp = temp.next;
}