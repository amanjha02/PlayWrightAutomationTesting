/* The includes() method is used to check whether a string contains a specific value or not.

It returns:

true → if the value exists in the string
false → if the value does not exist */

//string.includes(searchString, position)

let s = "Hello world";
console.log(s.includes('Hello'))//true
console.log(s.includes('word'))//false
console.log(s.includes('Hello', 0));//true
console.log(s.includes('word', 6));//false
console.log(s.includes('d'))//true
console.log(s.includes('d', s.length - 1))//true
console.log(s.includes('d', s.charAt(s.length - 1)))//true

//case sensitive 
console.log(s.includes('hello'))//false

//includes also use in Array
let fruits = ["Apple", "Mango", "Banana"];

console.log(fruits.includes("Mango"));
console.log(fruits.includes("Orange"));

//This is commonly used in automation testing to
// verify page titles, messages, and element text.

/* const title = await page.title();

if (title.includes("Dashboard")) {
    console.log("User is on Dashboard page");
} */

