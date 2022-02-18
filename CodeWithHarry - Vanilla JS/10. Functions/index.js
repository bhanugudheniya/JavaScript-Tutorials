// Function
const mygreet = function(Name, thank='Thank You'){  // if 'thank' is not passing then it will show default value that is 'Thank You' 
    let msg = `Happy Birthday ${Name}, ${thank}`
    return msg;
}

let Name = 'Bhanu';

let val = mygreet(Name, 'Thanks a lot');
console.log(val);

// Function inside object
const myobj = {
    Name: 'Bhanu',
    game: function(){
        return 'GTA';
    }
}
console.log(myobj.game());

// Function in loop
arr = ['fruit', 'vegetable', 'furniture'];
arr.forEach(function(element, index, array) {
    console.log(element, index)
});

// Scope in Function
if(1){
    var i = 234;
    //let i = 234;    // block scope
    console.log(i);
}

console.log(i); // not identified by let i at line 30

function ui(Name){
    let i = 9;
    console.log(i);
    return `This is a ${Name} ui`;
}
console.log(ui("Bhanu"), i);    // not identified by let i at line 30