/* Objects are created using two types : (a)constructor(Object.create) (b)Object Literals 
Here we are discussing object literals.
// Object literals are a way to define objects using a simple syntax.
// They are defined using curly braces {} and can contain key-value pairs.
// The keys are strings and the values can be of any type, including other objects, arrays, and functions.
// Object literals are often used to create simple objects or to define configuration options for functions
// or classes.
*/

const mySym = Symbol("key1")
const JsUser = {
    name:"Suryansh",
    "full name" : "Suryansh Sharma",
    age:18,
    [mySym]:"myKey1",//if mySym : "myKey1" then it will be treated as string key
    location:"Delhi",
    email:"suryansh@gmail.com",
    isLoggedIn:true,
    lastLoggedInDays:["Monaday","Saturday"]
}

//console.log(JsUser.name)//Suryansh
//console.log(JsUser.email)//suryansh@gmail.com//in dot operator email is already in stringformat
//console.log(JsUser["email"])//suryansh@gmail.com//in bracket operator email is passed in string format
//console.log(JsUser["full name"])//Suryansh Sharma

JsUser.email = "suryansh@yahoo.com"//changes the email in the object
//Object.freeze(JsUser)//freezes the object so that it cannot be changed
JsUser.email = "suryansh@microsoft.com"//this will not change the email as the object is frozen
//console.log(JsUser)

//Functions can also be added to objects as methods
//Methods are functions that are properties of an object.
//They can be called using the dot or bracket notation, just like any other property.
JsUser.greet = function(){
    console.log("Hello JS User!!")
}

JsUser.greetTwo = function(){
    console.log(`Hello JS User, ${this.name}!!`)
}

console.log(JsUser.greet())//Hello JS User!!undefined
console.log(JsUser.greetTwo())//Hello JS User, Suryansh!!undefined

//undefined is due to some other processing in the console, not the function itself