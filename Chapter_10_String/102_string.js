// declarion of string 
let url="https;//aap.vwo.com"
let status='pass';
let message =`Test complete in ${320}ms` // template literal `--thhis called Back tick

console.log(message);

//we can declare sttring in single quote and double quotes

//single quotes

let a='hello';

//double quotes
let b="world";

//templete literals (backticks)- allows experesion & multiline
let name1="Aman";
let name2="kumar";
let msg=`Hello, ${name1}! 2=2=${2+2}`
let msg1=`Hello,${name1}@ 2*3=${2*3}`

console.log(msg);
console.log(msg1)

//Also declare as Multiline

 let report =
`Test: login
 status: pass,
 Duration: 320ms`
 ;

 console.log(report)

 //String constructor (convert other types in to string )
let trueavlue=String(true);
 console.log(String(200))
  console.log(String(true))
   console.log(String([1,2,3]))

 console.log(trueavlue)  



