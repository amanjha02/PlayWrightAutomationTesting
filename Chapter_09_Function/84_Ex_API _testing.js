//if(ourstatuscode >200 && ourstatuscode<300)

// function getstatuscode(status_code) {
//     if (status_code > 200 && status_code < 300) {
//         console.log("Request is fine")
//     }
// }

// console.log(getstatuscode(201))
// console.log(getstatuscode(202))

//function expresion 

// const getstatuscode_fX = function (status_code) {
//     if (status_code > 200 && status_code < 300) {
//         console.log("Request is fine")
//     }
//     return "Sucess"
// }
// console.log(getstatuscode_fX(205));

//Arrow function

const getStatusCode_Arrow_fn = (status_code) => {
    if (status_code > 200 && status_code < 300) {
        console.log("Request is fine")
    }
}
//Arrow function using ternary operarator 
const getStatusCode_Arrow_fn1 = (status_code) => status_code > 200 && status_code < 300
    ? "Request is fine" : "request fail";