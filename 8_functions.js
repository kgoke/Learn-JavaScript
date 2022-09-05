// systax
// function 'funcName'('arguments'){}

// examples of functions
function printHi(){
    console.log('Hi\n');
}

function add(a,b){
    console.log(a + b);
}

/* NOTES:
    functions have scope: this means any variable created within a function can only be accessed
        within that funcntion.
*/

// returning value froms functions
function timeTwo(num){
    return num * 2; // reuturns input times two
}

//using functions to change global variables
var sum = 0;    // global variable sum
function addSix(){
    sum = sum + 6; // adds six to sum
}
function addSix(); // call to function
// sum would now have the value of 6