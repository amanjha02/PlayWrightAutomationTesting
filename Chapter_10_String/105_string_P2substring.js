//extracting substring

let str = "Login_Test_Pass_001"

// console.log(str.slice(0,3)) //last value will not consider

// console.log(str.slice(2)); //extract all vale from index 2 postion to lasst index

// console.log(str.slice(3,str.lastIndexOf()))


// console.log(str.slice(-4))

// console.log(str.slice(-3,3))


// console.log(str.slice(3,-1)) //in_Test_Pass_00

// substring(start, end) — no negatives (treats as 0)
console.log(str.substring(6, 10));  // "Test"  lat value not include

console.log(str.substring(-1, -2));

//at function
console.log(str.at(0));

console.log(str.at(-1));