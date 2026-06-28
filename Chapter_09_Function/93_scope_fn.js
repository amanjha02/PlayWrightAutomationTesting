

// function greet() {
//     let name = 'aman'
//     console.log(name)
// }

// greet();
// console.log(name) //name is not defined 

//Global scope 
// let name = 'aman'
// function greet() {

//     console.log(name)
// }
// greet();//aman
// console.log(name) //aman

//nested function 
//inner function can use varaiable which is available inside the function 
//This is called Lexical Scope.
// function outer() {
//     let outer_var = "I am outer "
//     function inner() {
//         console.log(outer_var)
//     }
//     inner();
// }
// outer();

//global scope 
let city = "Pune";

function showCity() {
    console.log(city);
}

//function cope 
function test() {
    var x = 10;
    let y = 23;
}

//console.log(x); // Error
//console.log(y);//error 

//block scope 

if (true) {
    var z = 23;
    let x = 10;
    const y = 20;
}
console.log(z)//23  
console.log(x) //x is not defined // let and const scope inside block only 
// console.log(y)// y is not defined 