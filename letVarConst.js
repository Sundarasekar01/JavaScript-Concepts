
//var- function scope
//let - block scope
//const - block scope

function display(){
    for(i=0; i<10;i++){
        console.log(i)
    }
    console.log(i)
}
display()
 console.log(i)

//  If the variable is not declared , then it is by default Var

// Var binds with window object , so we can access the value in window also.

// redeclaration is possible in var and not possible in let and const.
 var a=10
 var a=40
 console.log(a)

// reassignment is possible in var ,let and not possible in const.

let b=10
b=40
console.log(b)


