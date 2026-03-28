
//A callback in JavaScript is a function that is passed as an argument to another function and executed later.

// A callback is a function passed into another function to be called after a certain task is completed.

function greet(name,test){
    console.log("Hello"+name)
    test();
}

function sayBye(){
console.log("Goodbye!")
}

greet("Aman",sayBye)

console.log("************************************************************************")
function addressDetails(firstaddress,seconaddress){
    console.log("First Addreess is "+firstaddress)
    seconaddress();
}

//Below are the callback Function
function seconaddressdetails(){
    console.log("I am seconAddress")
}

addressDetails("Pune",seconaddressdetails)

console.log("************************************************************************")

function placOrder(item,callback){
    console.log("Placingg order  "+item);
    callback()
}

function orderReady(){
    console.log("Order ready Now")
}
// First way
placOrder("Burger",orderReady)

//second way

placOrder("Burger",function orderReady(){
    console.log("Order ready Now")
})

//Third way 
console.log("-----------")
placOrder("Burger", () => {
    console.log("Arrow Fn, I am also a function wihtout name!")
});

