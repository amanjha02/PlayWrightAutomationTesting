| Feature         | var      | let   | const |
| --------------- | -------- | ----- | ----- |
| Scope           | Function | Block | Block |
| Reassign        | Yes      | Yes   | No    |
| Redeclare       | Yes      | No    | No    |
| Hoisted         | Yes      | Yes   | Yes   |
| Must Initialize | No       | No    | Yes   |


var a = 10;
let b = 20;
const c = 30;

During memory creation:

a → memory allocated → initialized as undefined

b → memory allocated → NOT initialized

c → memory allocated → NOT initialized

Interview-Friendly Summary
Variable	Hoisted	Initial Value During Hoisting	Access Before Declaration
var	Yes	undefined	Yes
let	Yes	Uninitialized	No
const	Yes	Uninitialized	No
Simple Rule:

var → hoisted + initialized

let/const → hoisted but stay inside TDZ until declaration line
`