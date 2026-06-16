const x  // at the time of declartion we need to intialized 
x = 10 // Missing initializer in const declaration

const name = 'Aman'
const name1 = 'kumar'//redeclarion //SyntaxError: Identifier 'name' has already been declared
//name = 'jha'//reassign//not allowes 


console.log(name)

//Scope level
const k = 23;
if (true) {
    const z = 23
    console.log('Inside block' + k)
}
//console.log(z) ///z is not defined will get output 
console.log('Outside block' + k)
// Block scoped
// Cannot be reassigned ❌
// Cannot be redeclared ❌
// Must initialize while declaring