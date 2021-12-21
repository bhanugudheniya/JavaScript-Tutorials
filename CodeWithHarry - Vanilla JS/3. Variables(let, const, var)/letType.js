let Lage = 23;                       // number
let Lname = "Bhanu";                 // string   
let Lqoute = `That's great!`;        // string with backtick(`)
let Ldeveloper = true;               // boolean
let Laddress = null;                 // null
let Ltask;                           // undefine
//let Lage = 50;                       // syntaxError: identifier "age" has already been declared
let city = 'mumbai';

console.log(Lage, Lname, Lqoute, Ldeveloper, Laddress, Ltask);

{
    let city = "Delhi"
    console.log(city);  // print 'Delhi' (in block variable / local variable)
}
console.log(city)       // print 'mumbai' (out block variable / global variable)