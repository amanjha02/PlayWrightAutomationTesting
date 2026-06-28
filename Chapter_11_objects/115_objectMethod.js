/* //this creation method called object literal
const employee = {
    name: "Aman",
    age: 23,
    city: "Pune",
    state: "Mha",
    phone: 5454545
}

//accessing the value uing dot notation
console.log(employee.name)//Aman
console.log(employee.age)//23

//accessing via bracket
//Bracket notation is useful when the property name is stored in a variable.
let key=age;
console.log([key])
console.log(employee["name"])
console.log(employee["phone"]) */

/* let person = {
    name: "Sohan",
    age: 12,
    city: 'pune'
}
console.log(person)
console.log(person.name = "Aman")//update
console.log(person)
console.log(person.moblieNumber = 45454)//insert new Value
console.log(person)
delete person.moblieNumber;//deleting the number
console.log(person) */

//A function inside an object is called a method.

/* const user = {
    name: "Aman",
    greet: function () {
        console.log("hello  " + this.name)//this refers to the current object.
    }
}

console.log(user.greet)//[Function: greet]
user.greet(); */

/* Nested Objects

Objects can contain other objects. */

/* const person = {
    name: "Aman",
    address: {
        city: "pune",
        state: "Maharashtra"
    }
}

console.log(person.name)//Aman
console.log(person.address.state)//pune
console.log(person.address.city)//Maharashtra */

//loping through an object 

// const user = {
//     name: "Aman",
//     age: 25,
//     city: "Pune"
// };

// for (let key in user) {
//     console.log(s, user[key])
// }

const person = {
    name: "Aman",
    address: {
        city: "pune",
        state: "Maharashtra"
    }
}

/* for (let key in person) {
    console.log(key, person[key])
} */

for (let key in person) {
    if (typeof person[key] === 'Object') {
        for (let innerKey in person[key]) {
            console.log(innerKey, ":", person[key][innerKey])
        }
    } else {
        console.log(key, person[key])
    }
}
