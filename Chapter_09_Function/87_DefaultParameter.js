function retry(testname, maxRetries = 3, delay = 1000) {

    console.log(`retrying ${testname} up to: ${maxRetries} times ,${delay}ms part`)

}

console.log(retry("sainity Test"))
console.log(retry("Checkout", 5))
console.log(retry("API Test", 2, 500))

//output :

// retrying sainity Test up to: 3 times ,1000ms part
// undefined
// retrying Checkout up to: 5 times ,1000ms part
// undefined
// retrying API Test up to: 2 times ,500ms part
// undefined