/* split() Method in JavaScript

The split() method is used to convert a string into an array 
by breaking the string at a specified separator.

Syntax
string.split(separator, limit)
separator → The character or pattern where the string should be split.
limit (optional) → Maximum number of elements to return. */

//Example 1: Split by Space

let text = "JavaScript is Awsome";
console.log(text.length)
let result = text.split(" ");
console.log(result);//[ 'JavaScript', 'is', 'Awsome' ]

//Example 2: Split by Comma

let fruits = "Apple,Mango,Banana,Orange";
let result1 = fruits.split(",");
console.log(result1);//[ 'Apple', 'Mango', 'Banana', 'Orange' ]
let updateResult = result1.join('-')//
console.log(updateResult);//Apple-Mango-Banana-Orange

//Example 3: Split into Characters
let name = "Aman";

let chars = name.split("");

console.log(chars);

// Example 4: Using Limit
let text1 = "red blue green yellow";

let result2 = text1.split(" ", 2);

console.log(result2);//["red", "blue"] only 2 value returned 

//Example 5: Extracting Data in Playwright

let url = "https://example.com/dashboard/home";
console.log(url.includes('example.com'));//true
let extracturl = url.split('/')
console.log(extracturl)////[ 'https:', '', 'example.com', 'dashboard', 'home' ]
console.log(extracturl[0])  //https:
console.log(extracturl.includes('home'))//true

let str = "Hello World";

console.log(str.split()); //[ 'Hello World' ]

// Important Points
// split() does not modify the original string.
// It always returns a new array.
// If the separator is not found, the entire string becomes a single array element.

/* | Method    | Input  | Output |
| --------- | ------ | ------ |
| `split()` | String | Array  |
| `join()`  | Array  | String  |*/

//split() and join() are often used together when processing strings in JavaScript and Playwright scripts

//interview Question
//https://chatgpt.com/c/6a406607-f874-83e8-b3f6-e4836809f7c4


//8. Can split() use regular expressions

let str = "apple,banana;orange grape";

console.log(str.split(/[ ,;]+/));//["apple", "banana", "orange", "grape"]


