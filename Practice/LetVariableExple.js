let name = 'Aman'
let name1 = 'kumar'//redeclarion //SyntaxError: Identifier 'name' has already been declared
name = 'jha'//reassign

console.log(name)

//Scope level
let k = 23;
if (true) {
    let z = 23
    console.log('Inside block' + k)
}
//console.log(z) ///z is not defined will get output 
console.log('Outside block' + k)
// Block scoped
// Can be reassigned ✅
// Cannot be redeclared ❌
// Hoisted but stays in Temporal Dead Zone