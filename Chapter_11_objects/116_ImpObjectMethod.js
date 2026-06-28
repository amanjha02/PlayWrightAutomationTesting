const employees = {
    name: "Aman",
    age: 32,
    city: 'pune'
}

//get all keys

console.log(Object.keys(employees))//[ 'name', 'age', 'city' ]

//get all value 

console.log(Object.values(employees))//[ 'Aman', 32, 'pune' ]

//get all key-value 

console.log(Object.entries(employees))//[ [ 'name', 'Aman' ], [ 'age', 32 ], [ 'city', 'pune' ] ]

/* 
Object.assign()

Copies properties from one object to another. */

const user1 = { name: "Aman" };

const user2 = Object.assign({}, user1);

console.log(user2);