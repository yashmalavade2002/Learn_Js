// fetch api
const URL= "https://cat-fact.herokuapp.com/facts";
let para = document.querySelector("#fact");
let butn = document.querySelector("#btn");
const getFacts  = async () => {
    console.log("getting data .....");
    let response = await fetch(URL);
    console.log(response); //JSON FORMAT    
     let data = await response.json(); // Making Data readable
     para.innerText= data[2].text;
     
};
butn.addEventListener("click",getFacts);
