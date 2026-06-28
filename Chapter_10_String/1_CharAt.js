//charAt() is a JavaScript string method used to
//  get the character at a specific index (position) in a string.

/* string.charAt(index)
index → Position of the character(starts from 0).
Returns the character at that position.
If the index does not exist, it returns an empty string(""). */

let s = "This is pune";
console.log(s.charAt(3))//s
console.log(s.charAt(4))//blank
console.log(s.charAt(s.length - 1))//e
console.log(s.charAt(s.lastIndexOf))
console.log(s.charAt(-2))//negative index not supported 

//charAt() vs Bracket Notation
console.log(s[1])//h
console.log(s.charAt(1))//h

//both return same value when index meet if not charAT()
// return empty but [] return undefined 

console.log(s[20])//""
console.log(s.charAt(20))// undefined 

//modern way ust at()
console.log(s.at(0))
console.log(s.at(-1))//started with last 

//at() supports negative indexing, while charAt() does not.
console.log(s.at(-1))