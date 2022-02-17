let marks = [34, 23, 34, 98, 78, 45];
const fruits = ['oranges', 'banana', 'apple'];
const mixed = ['str', 56, [3, 5]];  // array into the array

const arr = new Array(23, 24, 76, 'oranges');
console.log(marks);
console.log(mixed);
console.log(fruits[1]);
console.log(arr.length); // no. of total elements in array
console.log(Array.isArray('mixed'));    // return true/false bcs, it's check, the variable is array typed or not

// to change of value of index
// arr[0] = "Bhanu";
// /////////////////////////

let arrEl = arr[0];
console.log('element: ', arrEl);
console.log(arr);

let value = marks.indexOf(78);  //search an elements in the array and returns position
console.log(value);

// Mutating or Modifying arrays :: modification can be done in original array
marks.push(34);     // add item at the end of an array
marks.unshift(100); // add item at the beginnning of an array
marks.pop();        // remove item at the end of an array
marks.shift();      // remove item at the beginning of an array
marks.slice(2,3);   // remove an item by index position
marks.reverse();    // reverse the array

let marks2 = [1,2,3,4];
marks = marks.concat(marks2);   // concating two arrays
console.log(marks);

// creating an object using key and value pair
let myobj = {
    'first name': 'Bhanu',  // for using space between key, use inverted-comma(')
    address : 'delhi',      // single word key
    isActive: true,
    marks: [1,2,5,4]
};      // semi-colon is not imp

console.log(myobj);

// two way of getting value of the key
console.log(myobj['address']);  // using []
console.log(myobj.address);     // using .