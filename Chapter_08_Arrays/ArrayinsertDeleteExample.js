let marks = [20, 30, 40, 60, 50];

// console.log(marks)
// console.log(marks[0])
// console.log(marks[1])
// console.log(marks[2])
// console.log(marks[4])
// console.log(marks[5])
// console.log(marks[10]) //undefined means  value not assigned in js it will not through error 

// console.log(marks.length)
// for (let i = 0; i <= marks.length; i++) {
//     console.log(marks[i]);
// }

// for (let mark of marks) {
//     console.log(mark)
// }

// let fruits = ['Mango', "Banana", "Apple"]
// console.log(typeof (fruits)) //type of object 
// console.log(fruits);

// for (fruit of fruits) {
//     console.log(fruit);
// }

let fruits = ['Mango', "Banana", "Apple"]
//fruits.push(Cheery);//not works  ReferenceError: Cheery is not defined
fruits.push("Cheery") //insert element at last 
console.log(fruits) // [ 'Mango', 'Banana', 'Apple', 'Cheery' ]

fruits.unshift("Lichi");//insert the element at begning 
console.log(fruits)    //[ 'Lichi', 'Mango', 'Banana', 'Apple', 'Cheery' ]

fruits.pop()//remove element at the last 
console.log(fruits); //[ 'Lichi', 'Mango', 'Banana', 'Apple' ]

fruits.shift() //remove the element at the begning 

console.log(fruits); //[ 'Mango', 'Banana', 'Apple' ]
