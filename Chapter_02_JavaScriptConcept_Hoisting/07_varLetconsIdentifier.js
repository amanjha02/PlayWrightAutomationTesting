// /* var a=10;
// var a=30;
// const c=10;

// console.log(a)
// console.log(a)
// console.log(c) */
// //var ,let ,const

// //var a=10;//global scope

// //console.log(a);

// function printhello(){
//  //   var a=20;// local scope
//  //   console.log(a);
//     if(true){
//         var a=30; //block scope
//       //  console.log(a)
//     }

//     console.log("F ->" ,a)
// }

// //calling the function

// printhello();

// // // var also allows re-declaration:
// // var a = 10;
// // var a = 20; // No error, re-declaration is allowed
// // console.log(a); // 20

// if(true){
//     var c=10;
// }

// console.log(c)


// //hoisting concept

// console.log(p)/// what is dees move the varable and function to the top of their scope
// var p=50;


// ///Because JavaScript internally treats it like this:

// var p;          // moved to top (hoisted)
// console.log(p); // undefined
// p = 10;

// //Only the declaration is hoisted, NOT the value.

// var x = 5;

// function test() {
//     console.log(x);
//     var x = 10;
// }

// test();

// sayHello(); // ✅ Works

// function sayHello() {
//     console.log("Hello");
// }



let b=20 //global scope


console.log(b)

function printheloo(){
    //console.log(b)
    let b=30; //local scope
    if(true){
       let b=40;
       
       console.log(b) 
    }
    console.log("value is ==>",b)
}

printheloo();

// let does NOT allow re-declaration in the same scope
// let b = 40; // Error: Identifier 'b' has already been declared
// let a = 10;
// let a = 10;
let a = 10;
a = 20;
console.log(a); // 20

var nn=1
//let nn=1

const k=10;/// constant value can not change

// k=20;
// console.log(k)


if (true) {
  var x = 1;
  if(true){
    var z=10;
    let k= 43;
    console.log(k);
  }
  let y = 2;
  
}
console.log(x);
//console.log(y);
console.log(z);
 