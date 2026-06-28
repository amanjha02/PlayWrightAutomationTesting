// Without functions — repeated logic

let score1 = 100;
let result1 = score1 > 150 ? "pass" : "Fail";
console.log(result1)

let score2 = 200;
let result2 = score2 >= 200 ? 'pass' : 'Fail';
console.log(result2)

function result(score) {
    return score > 50 ? 'pass' : 'fail';
}

console.log("candidate is :  " + result(100));
