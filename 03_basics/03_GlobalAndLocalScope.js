var c = 300

if (true){
    let a = 10
    const b = 30
    var c = 30 //c = 30
}

// console.log(a);a cannot be accessed here as its scope is within if condition block i.e. local scope(block scope)
// console.log(b);b cannot be accessed here as its scope is within if condition block i.e. local scope(block scope)
console.log(c);//c can be accessed here due to unexpected behaviour of var keyword as it scope is global in program

/*For above reason, we generally donot use var as declaration of variables in project development because
there are many function defined inside a program and every function may have same variables inside it
to perform actions and operations.
*/

//**********************************************************************************************************************
let a = 100
if (true){
    let a = 10
    const b = 30
    var c = 30 //c = 30
    console.log("Inner a : ",a)
}
console.log("Outer a : ",a)


//************************************************************************************************************************
array = [1,2,3,4,5]
for (let i=0; i<array.length; i++){
    //scope of 'i' is only within function blocks {}
    console.log(array[i]);
}