// JSON
const obj = {
    name :"Kishan",
    rollno : 387,
    course : "JS",
    fee : "free"
}

// stringify()
const newobj= JSON.stringify(obj)
console.log(newobj);

// parse()
const obj2=JSON.parse(newobj)
console.log(obj2);


