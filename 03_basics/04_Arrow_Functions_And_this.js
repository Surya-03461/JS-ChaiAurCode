//this keyword :- Refers to the current context(object). 

const user = {
    username : "Suryansh",
    price : 999,
    
    WelcomeMessage : function(){
        console.log(`${this.username}, Welcome to Chai Aur Code!!`)
        console.log(this)
    }
}

user.WelcomeMessage()
user.username = "Sam"
user.WelcomeMessage()
/*Output:-
Suryansh, Welcome to Chai Aur Code!!
{
  username: 'Suryansh',
  price: 999,
  WelcomeMessage: [Function: WelcomeMessage]
}
Sam, Welcome to Chai Aur Code!!
{
  username: 'Sam',
  price: 999,
  WelcomeMessage: [Function: WelcomeMessage]
}
*/

console.log(this)//{};because there is no context(object) present in global scope(program)

//********************************************************************************************************************
function chai(){
    let username = "chai"
    console.log(username)//chai
    console.log(this.username)//{}
}
chai()//this keyword is only used with objects not with functions


//************************************************************************************************************
const Chai = function(){
    let username = "chai"
    // console.log(username);chai
    console.log(this.username);//undefined
}
Chai()

//********************************************************************************************************************
//Arrow Function
const Chai_Code = () => {//Arrow operator basic
    let username = "Chai"
    console.log(username)//Chai
    console.log(this.username)//undefined
}

Chai_Code()

//Arrow operator pe charcha
// When arrow operator is used then there is no need to write function() keyword

//1.Explicit Return Result
const AddTwo = ( num1, num2 ) => {
    return num1 + num2
}

console.log(AddTwo(6,4))//10


//2.Implicit return result
const Add = ( num1, num2) => ( num1 + num2 ) 
console.log(Add(6,5))//11

//Returning objects
const add = () => ({username : "Suryansh"})//{ username : 'Suryansh' })

console.log(add())

/*
myarr = [1,2,3,4,5]
myarr.foreach( () => () )
*/