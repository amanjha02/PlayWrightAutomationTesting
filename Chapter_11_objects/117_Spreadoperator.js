//The spread operator takes all properties from user1 and copies them into a new object.
//const user2 = { ...user1 };
//spread operator(...) to create a

//shallow copy example

const user1 = {
    name: "Aman",
    age: 35
}

const user3 = { ...user1 };
console.log(user3.name)//Aman
user3.name = "Sohan";
console.log(user1.name)//Aman
console.log(user3.name)//sohan