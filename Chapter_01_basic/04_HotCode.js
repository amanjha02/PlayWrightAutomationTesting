console.log("Hello");

function add(a, b) {
    return a + b;
}
let result;
for (let i = 0; i <= 10000000; i++) {
    result = add(i, i + 1);
}

//Any code runing frquently is called hot code
console.log("After 10000 calls:", result);