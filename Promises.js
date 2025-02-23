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