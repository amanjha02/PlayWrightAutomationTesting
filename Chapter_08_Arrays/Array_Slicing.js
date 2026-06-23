let num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let result = num.slice(1, 3); //index 1 include and index 3 exclude 
console.log(result) //[2,3]
console.log(num);
console.log(result.slice(0, 2));

console.log(num.slice(2)); //[3, 4, 5, 6,7, 8, 9] //from 2nd  index to last From Index to End

console.log(num.slice())//copy entire array  [1, 2, 3, 4, 5, 6, 7, 8, 9]

//Negative Indexes
let fruits = ["Apple", "Mango", "Banana", "Orange"];
console.log(fruits.slice(-2));

let array = [1, 2, 3]
console.log(array.splice(0, 1)) //[1]
console.log(array)//[2,3] //modify array returned 

let array1 = [4, 5, 6]
console.log(array1.slice(0, 1)) //[4]
// console.log(array1)//[[4, 5, 6] same array returned  /Original array remains unchanged.

// Easy Interview Memory Trick
// slice = Copy/Cut and return a new array
// splice = Remove/Add elements in the original array

// Think:

// 👉 slice → "S" for Safe (doesn't change original)

// 👉 splice → "P" for Permanent change (modifies original)