let myVar;

// number to string
myVar = String(34);
console.log(myVar, typeof(myVar));      // or - console.log(myVar, (typeof myVar))

// bool to string
let boolVar = String(true);
console.log(boolVar, typeof(boolVar));

// date to string
let date = String(new Date());
console.log(date, typeof(date));

// array(object) to string
let arr = String([1, 2, 3, 4, 5]);
console.log(arr.length, typeof(arr));

// number to string
let i = 75;
console.log(i.toString());

// string to number
let str = Number('4654');
console.log(str, typeof(str));

// alpha-numeric to number -- NaN
str = Number('565de6');
console.log(str, typeof(str));

// bool to number
str = Number(false);
console.log(str, typeof(str));

// object to number
str = Number([1, 2, 3, 4, 5]);
console.log(str, typeof(str));

let number = parseFloat('35.254');
console.log(number.toFixed(2), typeof(number));

// Type coercion

let myStr = Number('789');
let num = 34;
console.log(myStr + num);