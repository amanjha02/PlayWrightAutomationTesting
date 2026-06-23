// let scores = [45, 82, 91, 60, 73];

// let grades = scores.map(s => s > 70 ? "pass" : "Fail") //>> Arroew function 

// console.log(grades);

// ['Fail', 'pass', 'pass', 'Fail', 'pass']

//map() does not modify the original array.
//  It creates a new array based on the logic you provide.

let fruit = ["Apple", "mango", "Guava"];

let isAppleCheck = fruit.map(f => f === 'Apple' ? "pass" : "Fail")

console.log(isAppleCheck)