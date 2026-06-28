/* In JavaScript, replace() and replaceAll() are string methods used to replace text.

1. replace()
Replaces only the first occurrence of the matching value.
Returns a new string (original string does not change). */

// Replace  all replace aal the ocureance both method 
// return new string and bothe method case sensitive

let text = "I love mango .mango is my favorite fruit. Mango is helathy  "

console.log(text.replace('mango', 'Apple'));//I love Apple .mango is my favorite fruit 

console.log(text.replaceAll('mango', 'Apple'));//I love Apple .Apple is my favorite fruit 

console.log(text);//I love mango .mango is my favorite fruit

let result = text.replace(/mango/g, 'Apple')//replace all mango with case sensitive 
console.log(result);//I love Apple .Apple is my favorite fruit. Mango is helathy

let result1 = text.replace(/mango/gi, "Apple")//replace all mango withot case sensitive 
console.log(result1);//I love Apple .Apple is my favorite fruit. Apple is helathy  

// g → global (all matches)
// i → case-insensitive

/* | Method         | Replaces              |
| -------------- | --------------------- |
| `replace()`    | First occurrence only |
| `replaceAll()` | Every occurrence      | */

