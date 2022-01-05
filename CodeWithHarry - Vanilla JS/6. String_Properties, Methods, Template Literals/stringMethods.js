// chatAt(<position index>)
let str = 'Bhanu Gudheniya';
console.log(str.charAt(7));

// Concat(<string1>, <string2>)
let str1 = "Hello";
let str2 = str1.concat(" Bhanu ", "Gudheniya");
console.log(str2);

// indexOf(<substr>, <[start_from string]>)
let msg = 'Hello Bhanu Gudheniya';
console.log(msg.indexOf("Bhanu"));

// lastIndexOf(<substr>, <start_from>)
let stat = 'I Love India';
console.log(stat.lastIndexOf('I'));

// slice(<start>, <end>)
let sliceTxt = 'Programming';
console.log(sliceTxt.slice(0,4));

// split(delimiter, limit)
let txt = "a,b,c,d,e";
console.log(txt.split(","));

// substring(<from>, <to>)
let myString = 'I Love my India';
console.log(myString.substring(0,5));

// toLowerCase()
let text = 'BHANU';
console.log(text.toLowerCase());

// toUpperCase()
let text1 = 'bhanu';
console.log(text1.toUpperCase());

// search('str')
let searchText = "Welcome to Home";
console.log(searchText.search("to"));

// substr()
let strSub = 'apple, banana, kiwi' ;
console.log(strSub.substr(7,6)); // depreciated