// function outer() {
//     let x = 10;

//     function inner() {
//         console.log(x);
//     }
//     return inner;
// }
// //outer();

// const fn = outer();
// fn(); // 10
// // fn();

function outer() {
    let count = 0;

    function inner() {
        count++;
        console.log(count)
    }
    return inner;
}

const count = outer();
count();
count();
count();

// How it works
// outer() is called.
// It creates a variable count.
// It returns the inner() function.
// Normally, local variables disappear when a function finishes.
// But because inner() still uses count, JavaScript keeps count alive.
// Each call to counter() accesses the same remembered count variable.
//count variable create a menory so that it called closure 