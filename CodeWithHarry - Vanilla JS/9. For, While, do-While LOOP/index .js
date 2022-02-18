// For loop
console.log('*******************************')
for(let i = 0; i<10; i++){
    console.log(i);
}

// while loop
console.log('*******************************')
let j = 1;
while(j<10){
    console.log(j);
    j++;
}

// do-while
console.log('*******************************')
let k = 1;
do{
    console.log(k);
}while(k>3)

// break
console.log('*******************************')
let l = 1;
do{
    console.log(l);
    if(l===5){
        break;      // loop running till 5
    }l++
}while(l<10)
console.log("Done");

// continue
console.log('*******************************')
let m = 1;
do{
    if(m===5){
        m++;
        continue;   // skip 5
    }
    console.log(m);
    m++;
}while(m<10)
console.log("Done");

// Array
console.log('********* Array *********')

let arr = [2,3,4,6,5,7,4];

// Loop method to traverse array
for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

// forEach method to traverse array
console.log('*******************************')

arr.forEach(function(element, index, array){
    console.log(element, index, array);
});

/*
element shows value into the array
index shows index no of values
array shows the whole array
*/

// Object traverse using for...in loop
console.log('*******************************')

let obj = {
    name: "Bhanu Gudheniya",
    age: 22,
    type: "Programmer",
    OS: "Linux"
}

for(let key in obj){
    console.log(`The ${key} of object is ${obj[key]}`);
}
