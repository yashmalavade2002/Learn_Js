let students = [
    { id: "001", name: "Anish", sports: "Cricket" },
    { id: "002", name: "Smriti", sports: "Basketball" },
    { id: "003", name: "Rahul", sports: "Cricket" },
    { id: "004", name: "Bakul", sports: "Basketball" },
    { id: "005", name: "Nikita", sports: "Hockey" },
];
// Filter  

// const newArray = students.filter((curVal) => {
//     return parseInt(curVal.id) % 2 === 0; // Convert id to number and check even
// });

// console.log(newArray);
// const numbers = [1, 2, 3, 4];
// const evens = numbers.filter(num => num % 2 === 0);
// console.log(evens); // [2, 4]

// Map

const number = [1, 2, 3, 4];
const squared = number.map(num => num * num);
console.log(squared); // [1, 4, 9, 16]

