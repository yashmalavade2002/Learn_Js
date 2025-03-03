// console.log("Namaste!!");
// // This Keyword

// console.log(this);
// function   add() {
//     let sum=2+2;
//     console.log(sum);
//     console.log(this);
    
    
// }
// add();

let data = {
name : "Yash",
proff : "IT",
country : "India",
sum :  function(){
let add = 5+5;
console.log(add);
console.log(this.proff);
}
}
data.sum();
