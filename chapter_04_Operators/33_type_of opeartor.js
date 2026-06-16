console.log(typeof "hello");
console.log(typeof 123); // int -> number
console.log(typeof 31.4); // float -> number
// typeof true
// typeof undefined  -> undefined
// typeof null  -> object
// typeof [] -> object
console.log(typeof []); // -> object

console.log(`${6 * 4}`);
// The backticks ` ` create a template literal.

// Anything inside ${} is treated as a JavaScript expression and evaluated first.

let name = "Aman";
let age = 20;

console.log("My name is " + name + "and my age is " + age) //it will not work

console.log(`My name is ${name} and my age is ${age}`)

console.log(`My name is ${name} and my age is ${6 * 4}`)

// `` it called as bactick it used for combine number and string  what will be inside "${}"  it will be first convert as
//  string later add in to string 