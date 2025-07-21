if (true) {
    let a = 10
    const b = 30
    var c = 30 //c = 30
}

// console.log(a);a cannot be accessed here as its scope is within if condition block i.e. local scope(block scope)
// console.log(b);b cannot be accessed here as its scope is within if condition block i.e. local scope(block scope)
console.log(c);//30;c can be accessed here due to unexpected behaviour of var keyword as its scope is global in program


//*********************************************************************************************************************

var c = 300

if (true) {
    let a = 10
    const b = 30
    var c = 30 //c = 30
}

// console.log(a);a cannot be accessed here as its scope is within if condition block i.e. local scope(block scope)
// console.log(b);b cannot be accessed here as its scope is within if condition block i.e. local scope(block scope)
console.log(c);//30;due to global scope

/*For above reason, we generally donot use var as declaration of variables in project development because
there are many function defined inside a program and every function may have same variables inside it
to perform actions and operations.
*/

//**********************************************************************************************************************
let a = 100
if (true) {
    let a = 10
    const b = 30
    var c = 30 //c = 30
    console.log("Inner a : ", a)//Inner a : 10
}
console.log("Outer a : ", a)//Outer a : 100


//************************************************************************************************************************

array = [1, 2, 3, 4, 5]
for (let i = 0; i < array.length; i++) {
    //scope of 'i' is only within function blocks {} due to let keyword
    console.log(array[i]);
}

//************************************************************************************************************************

function One() {
    let username = "Suryansh"

    function Two() {
        let website = "Chai Aur Code";
        console.log(username);//Suryansh
    }
    //console.log(website);//Cannot access because it is block variable and can be accessed inside the function Two()
    
    Two()
}

One()

//*************************************************************************************************************************

if (true){
    let username = "Suryansh"
    if (username === "Suryansh"){
        const website = " chai Aur code";
        console.log(username + website);// Suryansh Chai Aur Code
    }
    // console.log(website);cannot be accessed as defined inside the condition block
}
//console.log(username);cannot be accessed as defined inside the condition block

//****************************************Interesting**********************************************************************************
//Different methods to declare functions and Their behaviour (Function Hoisting)

addOne(5)//no error as we are only accessing their definition
function addOne(num){
    // return num + 1
    console.log(num + 1)
}
//addOne(4)//5

//addTwo(4)//Error because calling or accesing variable(function) before declaration 
const addTwo = function(num){
    //return num + 2
    console.log(num + 2)
}
// addTwo(4)//6
