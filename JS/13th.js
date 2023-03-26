let placesToVisit = ["Bali", "Tokyo", "Paris", "New York", "Sydney"];
// print the array in its original order
console.log("Original order: " + placesToVisit);
// print the array in alphabetical order without modifying the actual list
console.log("Alphabetical order: " + placesToVisit.slice().sort());
// show that the array is still in its original order by printing it again
console.log("Original order (again): " + placesToVisit);
// print the array in reverse alphabetical order without changing the order of the original list
console.log("Reverse alphabetical order: " + placesToVisit.slice().sort().reverse());
// show that the array is still in its original order by printing it again
console.log("Original order (again): " + placesToVisit);
// reverse the order of the list and print the array to show that its order has changed
placesToVisit.reverse();
console.log("Reversed order: " + placesToVisit);
// reverse the order of the list again and print it to show it's back to its original order
placesToVisit.reverse();
console.log("Original order (again): " + placesToVisit);
// sort the array so it's stored in alphabetical order and print it to show that its order has been changed
placesToVisit.sort();
console.log("Alphabetical order: " + placesToVisit);
// sort the array to change it to reverse alphabetical order and print it to show that its order has changed
placesToVisit.sort().reverse();
console.log("Reverse alphabetical order: " + placesToVisit);
