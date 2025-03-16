function getCheese() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const cheese = '🧀';
            resolve(cheese);
        }, 2000);
    });
}

function makeDough(cheese) { // Accept cheese as a parameter
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dough = cheese + '🍩';
            resolve(dough);
        }, 2000);
    });
}

function bakePizza(dough) { // Accept dough as a parameter
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const pizza = dough + '🍕';
            resolve(pizza);
        }, 2000);
    });
}

getCheese()
    .then((cheese) => {
        console.log("Here is cheese:", cheese);
        return makeDough(cheese);
    })
    .then((dough) => {
        console.log("Here is dough:", dough);
        return bakePizza(dough);
    })
    .then((pizza) => {
        console.log("Here is pizza:", pizza);
    })
    .catch((error) => {
        console.error("Error:", error);
    });

// Promises
let pro= new Promise(function(resolve,reject){
   setTimeout(function(){
    let API = false;
    if(API){
        resolve("My Promise Resolved");
    }
    else{
        reject("My promise is rejected ");
    }
   },3000)
});
let data = pro;
console.log(data);

pro.then(function(resolve){
    console.log(resolve);
    
}).catch(function(reject){
    console.log(reject);
    
})


