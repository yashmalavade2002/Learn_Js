// const a=10;
// const b=20;
// sum(a,b); // calling

// const c=40;
// const d=30;
// sum(c,d); // calling

// function sum(a,b){
//     const sum = a+b;
//     console.log("result = ",sum);
//     // return sum;
// }

// function expression

// const square=function(num){
//     return num*num;
// };

// console.log(square(3));

// Nested functions
function addSquares(a,b){
    const sa=square(a);
    const sb = square(b);
    function square(num){
        return  num*num;
    }
    return sa+sb;
}
console.log(addSquares(3,4));
