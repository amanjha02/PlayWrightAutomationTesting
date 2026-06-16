console.log(5 == '5')//true loose compare 
console.log(5 === '5')//false ---tight compare
console.log(1 == true)//true
console.log(1 === true)//false
console.log(0 == false)//true
console.log(0 === false)//false

console.log(null == undefined); // special rule, they only equal each other)
console.log(null === undefined);

console.log(5 == 5.0);//true bcz in javascript qwe have only on type its is call ed number type 
console.log(5 === 5.0);//true number and type both are same
console.log(5 === 5.01)//false  here type is same but value is different 

console.log(typeof (5));
console.log(typeof (5.0));
console.log(typeof (5.01));
