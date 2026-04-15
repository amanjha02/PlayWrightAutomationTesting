/* function greet(){
    console.log("Hello")
}

function greet1(){
    return "Hello1"
}

greet()

let value=greet1()
console.log(greet1())

//console.log(value)

/* function add(a,b) {
    return a + b;
}
let sum = add(2,3);
console.log(sum); // 5
console.log(add(2,3)); // 5


Function() */ 

//function declartion 

function sayhello(){
    console.log("Hello world")
}


//calling the function 

sayhello();


/// function with parameters

console.log("------------------------------------")
function greet(name){
    console.log("Hello: "+name)
}

greet("Aman")

//Aman =argumnet 
// name =parameter 


//return the value from frunction 
console.log("-------------Return Function-----------------------")
function add(a,b){
    return a+b;
}

console.log("Add value is "+add(2,3));

// Function Expression 
//store the function inside the variable is called function expression 
console.log("-------------function expression-----------------------")
let sum=function(a,b){
    return a+b;
}

///calling function 

//console.log(sum()); ///NAN ---not a number 

/* sum expects a and b
calling sum() passes no values
a and b become undefined
undefined + undefined is NaN */

let sumValueis= sum(10,23);
console.log(sum())//NAN
console.log(sumValueis)//23


//Arrow function 
 const multiply=(a,b)=>(a*b)
 const multiply1=()=>(console.log("Multiplication of 2 number"))
console.log("*******Arrow Funcyion Example*************")
 console.log(multiply(10,20))
 console.log(multiply1())
   
 
