// Object.getOwnPropertyDescriptor() returns the descriptor object for a property, containing metadata such
//  as its value and whether it is writable, enumerable, and configurable.

let obj = { name: "Login" };
console.log(Object.getOwnPropertyDescriptor(obj, "name"));
// {
//   value: "Login",
//   writable: true,       ← can change the value
//   enumerable: true,     ← shows in for...in / Object.keys()
//   configurable: true    ← can delete or redefine
// }
