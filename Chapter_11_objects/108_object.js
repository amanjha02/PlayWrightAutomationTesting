let student = { name: "Aman", age: "30" }
let student1 = { name: "kamal", age: "31" }
let student2 = { name: "Raman", age: "32", Address: "Pune" }
console.log(student.name)
console.log("Student age is--" + student1.age)
console.log("Student Address is--" + student2.Address)

let student4 = student;
student.name = 'Mohan';
student4.name = 'sohan';
console.log(student4.name)

// let a ={status:"pass"}

// console.log(a.status)
// console.log(a["status"])

// let a1 ={status:"fail"}
// console.log(a1.status)

// let b=a;// b copies the REFERENCE, not the object
// b.status="fail";
// b.status="passed"
// b.age=40;

// console.log(a.status,a.age)

// let c={status:"Passed"} // Two seprate memory created
// let d={status:"Passed"}