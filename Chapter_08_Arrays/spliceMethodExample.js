//remove element
let number = [10, 2, 3, 4, 23]
number.splice(1, 2);//from index one 2 element will be removed
console.log(number); //[ 10, 4, 23 ]

//Add element without removing the elemet 
// let nubmer1 = [12, 23, 4, 5, 6, 7, 89]; 
// nubmer1.splice(2, 0, 30) //[12, 23, 30,  4 ,5,  6,  7, 89] it will insert 30 in second inds without removing 2nd element 
// console.log(nubmer1)

//Add element with  removing the elemet 
//repleace element 
// let nubmer2 = [12, 23, 4, 5, 6, 7, 89];
// nubmer2.splice(1, 2, 2, 3, 10)
// console.log(nubmer2)

//splice will  modify  original  array 

// let nums = [10, 25, 30, 45];
// let number1 = nums.find(nums => nums > 5) //In JavaScript, the find() method is used to return the first element in an array that satisfies a condition.
// console.log(number1)

const products = [
    { id: 101, name: "Laptop" },
    { id: 102, name: "Phone" }
];

const product = products.find(p => p.id === 102);

console.log(product.name); // Phone