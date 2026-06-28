/* ✅ Start index is included.
✅ End index is excluded.
✅ Negative values become 0.
✅ If start > end, values are swapped automatically.
✅ Original string remains unchanged. */

//It also retrun some part of string

let text = "JavaScript";

console.log(text.slice(6, 2));      // ""
console.log(text.substring(6, 2));  // vaSc

/* Explanation:

slice(6, 2) returns an empty string because start > end.
substring(6, 2) swaps the arguments and behaves as: */
//text.substring(2, 6)

let email = "aman@gmail.com";

let username = email.substring(0, email.indexOf("@"));

console.log(username);
