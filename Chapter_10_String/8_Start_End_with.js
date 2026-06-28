/* startsWith() Method in JavaScript

The startsWith() method checks whether a string starts with a specified value.

It returns:

true → if the string starts with the given text.
false → otherwise. 

string.startsWith(searchString, position)
Parameters:
searchString → The text to search for.
position (optional) → The position from which to start checking (default is 0).
*/

let text = "JavaScript is awesome";

console.log(text.startsWith("JavaScript"));//true
console.log(text.startsWith("awesome"));//false
console.log(text.startsWith("javaScript"));//false

console.log(text.endsWith('awesome'))//true
console.log(text.endsWith('e'))//true
console.log(text.endsWith('m'))//false
console.log(text.endsWith('Awesome'))//false