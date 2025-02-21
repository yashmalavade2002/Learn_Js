// Error Handling in Js
try{
    console.log("before err");
const Age=15;
console.log(Age);
console.log("After err");
}
catch(err){
console.log(err.name);
console.log(err.message);
}
finally{
    console.log("From Finally")
}

// try{
//     const res = prompt("are you a robot");
//     if(res==='Y'){
//     throw new Error("robot found");
//     }
// }
// catch(err){
// console.log(err);
// }
// finally{

// }