//var let and const example

//var can rdeclard
//it has finction scope
//reassignment alloe
//hoisted (initialize but undefined )

// if you don't mention let, const, or var, 
// JavaScript does NOT automatically consider it let; it may create a global variable

var name = "Aman"
var name = "Kumar" //redeclaration done 

name = "Jha" //reassigmnet done
name = 'rahul'

console.log(name)

if (true) {
    var x = 10;
}

console.log(x)

if (true) {
    let y = 11;
}
console.log(y)
//x is accessible outside because var is function scoped.


