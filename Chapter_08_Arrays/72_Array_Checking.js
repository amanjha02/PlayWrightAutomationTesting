// Checking Arrays

// Check if something IS an array


let result = Array.isArray([1, 2, 3]);
let result1 = Array.isArray("a");
let result3 = Array.isArray(1)
console.log(result);
console.log(result1);
console.log(result3);

console.log(typeof [1, 2, 3]); //it will return object so Araay.isArray() method used for checked is that array or not 
//Since arrays are technically objects in JavaScript,
//  typeof cannot reliably tell you if something is an array. That's why Array.isArray() is the recommended way.
// every & some
[80, 90, 85].every(s => s >= 70);   // true
[80, 60, 85].every(s => s >= 70);   // false

// some — AT LEAST ONE must pass
[80, 60, 85].some(s => s < 70); //  true
[80, 90, 85].some(s => s < 70); // false