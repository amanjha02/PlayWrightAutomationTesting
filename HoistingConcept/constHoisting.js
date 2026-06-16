// console.log(a)//Cannot access 'a' before initialization
// const a = 10

// //function hoisted
// sayHello();  //Hello

// function sayHello() {
//     console.log("Hello")
// }

greet(); ///greet is not a function--output
var greet = function () {
    console.log(greet)
}
//internally
// var greet;   // hoisted

// greet();     // undefined()

// greet = function() {
//    console.log("Hi");
// }

//Since greet becomes undefined, calling it causes an error.