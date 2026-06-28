const user = {
    name: "Aman",
    age: 35,
    city: "pune",
}

console.log(user.name)
console.log(user.age)
console.log(user.city)
console.log(user)
//a add the value
user.state = "Maharashtra"
console.log(user)
//update the key 
user.name = "Sohan"
console.log(user)
//deleting propeties
delete user.name;
console.log(user)
