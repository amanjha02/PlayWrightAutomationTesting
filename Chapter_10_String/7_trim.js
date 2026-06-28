/* Quick Comparison
Method	Removes Spaces From
trim()	Start and End
trimStart()	Start only
trimEnd()	End only

trim() is commonly used in form validation, 
API response processing, and Playwright automation when comparing text values from web pages. */

// /The trim() method removes whitespace from both the beginning and the end of a string.

/* trim() Method in JavaScript

The trim() method removes whitespace from both the beginning and the end of a string.

Whitespace includes:

Spaces " "
Tabs \t
New lines \n */

let text = " Hello World ";

// console.log(text.trim());//Hello World
// console.log(text.trimStart())//Hello World 
// console.log(text.trimEnd())// Hello World

//Here are examples showing how trim() removes different types of whitespace:

//Removing Tabs (\t)
let text1 = "\t\tHello World\t"; //\t represent tab character

console.log(text1)
console.log(text1.trim());

//Removing New Lines (\n)

let text2 = "\n\nHello World\n\nhi\n"; //removing new Line 
console.log(text2)
console.log(text2.trim());

