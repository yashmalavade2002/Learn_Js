// async await
function orderPizza(type) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Your ${type} pizza is ready! 🍕`);
        }, 3000);
    });
}
async function orderMultiplePizzas() {
    console.log("Ordering Margherita pizza... 🍕");
    let  margherita  =  await orderPizza("Margherita");
    console.log(margherita);

console.log("Ordering Pepperoni pizza... 🍕");
let pepperoni = await orderPizza("Pepperoni");  // Waits for another 3 seconds
console.log(pepperoni);
}
orderMultiplePizzas();


// Async Await
let pro = new Promise(function(resolve,reject){
    setTimeout(function(){
     let API = true;
     if(API){
        resolve("Promise Fullfilled");
     }
     else{
        reject("Promise rejected");
     }
    },4000)
})
 async function check(){
    let data = await pro;
    console.log(data);
    
 }
 check();
