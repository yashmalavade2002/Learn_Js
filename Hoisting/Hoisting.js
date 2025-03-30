// Hoisting
// debugger
console.log(a);
var a='Anurag';
// console.log(username);


hi();
// function Declaration
function hi(){
    console.log("Namaste 🙏 !!");
    
}
// hi();
sayHi();
// function expression
var sayHi = function() { // anonymous function
    console.log('Hello');
    
}
sayHi();
