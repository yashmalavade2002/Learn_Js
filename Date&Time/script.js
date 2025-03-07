// let date = new Date();
// console.log(date);
// Methods

// It Give millisecond from 1 jan 1970
// Date.now()
// console.log(Date.now());

// getMethod()
// we get Time,Hour, ,Minute, second , Millisecond
// let date = new Date();
// console.log(date);
//    console.log(date.getHours());
//    console.log(date.getMinutes());
//    console.log(date.getSeconds());
//    console.log(date.getMilliseconds());

//    console.log(date.toLocaleString());

// console.log(date.toLocaleDateString());
// console.log(date.toLocaleTimeString());
// console.log(date.getFullYear());


// Date & Time challenge
// print time going on your computer 
// let date = new Date();
// let local = date.toLocaleTimeString();
// console.log(local);


let get = setInterval(myFun,1000);
function myFun(){
    let date = new Date();
    document.getElementById("head").innerHTML=date.toLocaleTimeString();
}
