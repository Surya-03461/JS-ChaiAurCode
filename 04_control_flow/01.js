//Conditional Flow of Program : Flow of program depends on a condition being met
const isLoggedIn = true

if (isLoggedIn){
    console.log("User Logged In Successfully !!")//User Logged In Successfully !!
}
//BUt if it is false then nothing will be displayed

//****************************************************************************************
//Here relational operators come into play.[<,<=,>,>=,!=,==,!==,===]

const temperature = 41

if (temperature === 41){
    console.log("if executed")//This statement will be executed
}
console.log("Thank you")//This will also be executed irrespective of condition 

//****************************************************************************************
let Temperature = 52
if (Temperature === 50){
    console.log("Temperature is 50")
}else{
    console.log("Temperature is not 50")//this statement will be executed
}
console.log("Thank you")//this will also be executed

// *****************************************************************************************

const score = 200

if (score>100){
    let power = "fly"
    console.log(`Power of User : ${power}`)//this will be executed as its scope is with in the conditions blocks
}
console.log(`Power of User : ${power}`)//Error because power's scope is not global instead it is block but if it is var then it can be accessed 

/*
Shorthand notation of condition:-
this is implicit scope for only one line but we cannot add multiple lines
*/
const balance = 1000

if (balance > 500) console.log("Active Account")//Active account

/*It i snot good practice to write code in this way
if (balance > 500) console.log("Active Account"),console.log("tested")
->Active Account
->tested
*/

// ***************************************************************************************
//Multiple Conditions

let Balance = 1000

if (balance < 500){
    console.log("Balance is less than 500")
}else if (balance < 750){
    console.log("Balance is less than 750")
}else if (balance < 900){
    console.log("Balance is less than 900")
}else if(balance <1200){
    console.log("Balance isless than 1200")
}else{
    console.log("Balance is more than 1200")
}
/*
Output:-Balance is less than 1200
*/

const loggedIn = true
const DebitCard = true
let GoogleLogin = false
let EmailLogin = true

/*if (loggedIn && DebitCard && 2==2){//this will be executed
    console.log("Allow to buy courses.")
}
if (loggedIn & DebitCard && 3==2){//this wil not be executed
    console.log("Allow to Buy Courses")
}*/

//This statement will execute because we are checking for any or both of the two conditions being true
if (GoogleLogin || EmailLogin){
   console.log("User Logged In!!") 
}


/* 
Logical Operators:-Used to evaluate multiple condition within if block  
&&,||,!
*/


//***********************************************************************************

