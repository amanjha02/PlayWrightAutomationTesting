/* The slice() method is used to extract a part of a string and return it as a new string.

The original string remains unchanged. */

/* string.slice(startIndex, endIndex)
startIndex → Starting position (included).
endIndex → Ending position (excluded).

If endIndex is omitted, slice() extracts till the end of the string. */

let s = "javaScript"
console.log(s.slice())//javaScript
console.log(s.slice(1, 2)) //a //second index excludes
console.log(s.slice(3))//[3 to end ]//aScript

let text = "Hello java"

console.log(text.slice)// [Function: slice]
console.log(text.slice(1, 3))//el
console.log(text.slice(3))//lo java
console.log("*************ArrayFunctio*********")
let text1 = ["Hello", "java"]

console.log(text1.slice)// [Function: slice]
console.log(text1.slice(1, 3))//[ 'java' ]
console.log(text1.slice(3))//[]

console.log(text1.slice(0, 2))

//Example 3: Using Negative Index

// let text4 = "Hello java";
// console.log(text4.slice(-1))//a
// console.log(text4.slice(-2))//av
// console.log(text4.slice(-3))
// console.log(text4.slice(-7, -3)) //lo j
// console.log(text4.slice(-1, "-" + text4.length))


/* let email = "user@gmail.com";

let domain = email.slice(email.indexOf("@") + 1);

console.log(domain);//gmail.com */

//Difference Between slice() and substring()

let text = "JavaScript";

console.log(text.slice(-6));      // Script
console.log(text.substring(-6));  // JavaScript

/* slice() supports negative indexes.
    substring() treats negative values as 0. */

/* Start index is included.
End index is excluded.
Supports negative indexes.
Does not modify the original string or array. */