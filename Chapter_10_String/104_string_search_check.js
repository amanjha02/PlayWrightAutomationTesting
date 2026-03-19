 let url = "https://staging.vwo.com/api/login?retry=true";

// //includes method case senstaitive 

// console.log(url.includes("vwo"))
// console.log(url.startsWith('https://staging'))
// console.log(url.endsWith('true'))

// let url1 = " https://staging.vwo.com/api/login?retry=true ";
// console.log(url.length)
// console.log('*************************')
// console.log(url1.trim())
// let trimvalue=url1.trim()
// console.log(trimvalue.length)
// console.log(url.length)
// console.log('*************************')

// console.log(url1.trimStart())
// console.log(url.length)
// console.log('*************************')
// console.log(url1.trimEnd())
// console.log(url.length)
//********************************************************************************* */

// let str3 =" Aman "
// console.log(str3.length);
// console.log(str3.trim().length);
// console.log(str3.length);
// let trimvalue=str3.trim().length;
// console.log(trimvalue);
// console.log(str3.trimStart().length)
// console.log(str3.trimEnd().length)

//common striing method 

// indexOf / lastIndexOf
console.log(url.indexOf("a"));
console.log(url.lastIndexOf("a"));
console.log(url.indexOf("nothere"));

// search() — accepts regex, returns index
// Search basically works in a way that it searches with regex. 
console.log(url.search(/login/)); // regex

url.search(/\d+/);
