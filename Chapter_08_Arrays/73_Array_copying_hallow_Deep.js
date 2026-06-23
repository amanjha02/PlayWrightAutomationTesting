//using the [...]spread operator //most popular

let number = [1, 2, 3, 4, 5];
let copynumber = [...number]
console.log(copynumber)

//using slice method //most common 
let number1 = [1, 2, 3, 4, 5];
let copynumber1 = number1.slice();
console.log(copynumber1)

//using Arrayfrom()
let number2 = [1, 2, 3, 4, 5];
let copynumber2 = Array.from(number2);
console.log(copynumber2)

let fruits = ["Apple", "Mango", "Orange"];
let copy = fruits; // Not a real copy here both pointed to same Array 
copy.push('cherry');
console.log(fruits) //[ 'Apple', 'Mango', 'Orange', 'cherry' ]
//The original array also changes because copy and fruits reference the same array.

let fruits1 = ["Apple", "Mango", "Orange"];
let copy1 = [...fruits] // It is  a real copy here both not pointed to same Array 
copy1.push('cherry');
console.log(fruits1) //[ 'Apple', 'Mango', 'Orange' ]
console.log(copy1);//[ 'Apple', 'Mango', 'Orange', 'cherry', 'cherry' ]


//interview point
// let copy = arr → Copies the reference.
// let copy = [...arr] or arr.slice() → Creates a new array (shallow copy).