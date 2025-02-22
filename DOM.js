// const myBody= document.body;
// // myBody.style.backgroundColor="red";
// console.log(myBody);
// let box2=document.getElementById('box-2');
// console.log(box2);
// const divs= document.getElementsByTagName('p');
// console.log(divs);
// const boxes= document.getElementsByClassName('box');
// console.log(boxes);
// const box1= document.getElementById("box-1");
// box1.innerHTML="<h1>Hello</h1>";
// box1.style.backgroundColor="red";



//  creating element
const newpara= document.createElement('p');
newpara.innerHTML="This is para";
const container = document.getElementById('container');
container.appendChild(newpara);
