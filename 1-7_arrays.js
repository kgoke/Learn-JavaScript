// array syntax
var arr = [];

// elements in arrays are seperated by commas
var arr1 = [1, 2, 3];

// arrays can hold different data types within a single array
var arr2 = [1, "Hello", 1.2, true];

// nested arrays
// arrays within another array
var arr3 = [["hello",12],["world",1001]];

// finding elements within an array at certain index
var data = arr2[0]; // first elements in arr2[]

// modifying arrays with indexes
arr1[1] = 45;   // changes second element in arr1[] to be 45

// accesing multidemetional arrays
var data = arr3[0][1];  // first bracket is element in outside array, second bracket is elemenet inside inner array

// manipulating arrays
arr1.push(4); //adds 4 to end of arr1[]

arr1.pop(); // removes last element from arr1[]

arr1.shift(); // removes first element from arr1[]

arr1.unshift(); // addes element to begining of arr1[]

arr1.splice(2, 0, "hello"); // splice(start, deleteCount, data);

