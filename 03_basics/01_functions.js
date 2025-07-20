//Function Definition
function myName() {
    console.log("S");
    console.log("U");
    console.log("R");
    console.log("Y");
    console.log("A");
    console.log("N");
    console.log("S");
    console.log("H");
}

//myName();//Function call to execute the function

function addTwoNumbers (num1,num2){
    console.log(num1 + num2);
}

addTwoNumbers(10,20);//Function call to execute the function//30
const result1 = addTwoNumbers(10,20);//Function call to execute the function
console.log(result1);//undefined, because the function does not return anything

function addNumbers (num1,num2){
    let res = num1 + num2;//Scope of 'res' is within the braces of function
    return res;//terminates the function and return the value at function call position
}

const result = addTwoNumbers(10,20);//its scope is outside the function
console.log(result);//30

function UserNameMessage(username){
    // if (username === undefined){
    //     console.log("Please enter a username");
    //     return;
    // }
    //or
    if (!username){
        console.log("Please enter a username");
        return;
    }
    return `${username}, Welcome to the world of JavaScript`;
}

console.log(UserNameMessage("Suryansh"));//Suryansh, Welcome to the world of JavaScript
console.log(UserNameMessage());//Please enter a username
console.log(UserNameMessage(""));//Please enter a username
//undefined, because the function does not return anything

//Default parameters
function UserNameMessageWithDefault(username = "Surya"){
    /*This if block is not needed because we have set a default value for username
    if (!username){
        console.log("Please enter a username");
        return;
    }*/
    return `${username}, Welcome to the world of JavaScript`;
}

console.log(UserNameMessageWithDefault());//Surya, Welcome to the world of JavaScript