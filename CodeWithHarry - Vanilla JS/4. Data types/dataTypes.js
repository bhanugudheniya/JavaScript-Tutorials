// Primitive data types

// String
let myName = "Bhanu";
console.log("My name is " + myName);
console.log("Data type is " + (typeof myName));     // string

// Number
let marks = 34.4;   // return number
let age = 20;       // return number
console.log("Data type is " + (typeof marks) + " " + (typeof age));

// Boolean
let isDriver = true;
console.log("Data type is " + (typeof isDriver));   // boolean

// Null
let nullVar = null;
console.log("Data type is " + (typeof nullVar));    // object

// Undefine
let undef;
let undef1 = undefined;
console.log("Data type is " + (typeof undef) + " " + (typeof undef1));  // undefine



// Reference / Non-Primitive data type

// Array
let myArr = [1, 2, 3, false, "String"];
console.log("Data type is " + (typeof myArr));  // return object

//Object literals
let stMarks = {
    bhanu: 89,
    shyam: 36,
    ram: 34,
    'ram das': 45   // space allowed only in single, double qoutes
}
console.log(stMarks);
console.log("Data type is " + (typeof stMarks));    // return object

// Function
function findName(){

}
console.log("Data type is " + (typeof findName));   // return function

// Date
let date = new Date();
console.log("Data type is " + (typeof date));   // return object