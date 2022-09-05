/*
Different types of variables in javascript

boolean: true and false
numbers: 1,2,3.22,...
strings: "a", "b", "hello",...
null: nothing
undefined: no type for variable;
object: defineProperty(x,y)
symbol: symbol() --> not a function
*/

// declaring variables
var x;  // act like normal variable can be used and modified normally

let y;  // can only be used and modified within a scope

const z = 3.14; // cannot be modified once declared/defined

// defining variables

// first way
var a;
a = 2;

let b;
b = 2;

// second way 
var c = 2;

let d = 2;

/* NOTES:
    variables in javascript are case sensitive (use camelCase)
    const varibles must be initialized
*/