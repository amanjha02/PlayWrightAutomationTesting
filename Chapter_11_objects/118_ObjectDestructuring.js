/* Object Destructuring, it means:
Extracting values from an object and storing them in variables. */
const user = {
    name: "Aman",
    age: 25
};

const { name, age } = user;

console.log(name); // Aman
console.log(age);  // 25

//Object destructuring is an ES6 feature that allows extracting
// properties from an object and assigning them directly to variables using a concise syntax.

//playwright example

const response = {
    status: 200,
    message: "Success"
};

const { status, message } = response;

console.log(status);  // 200
console.log(message); // Success