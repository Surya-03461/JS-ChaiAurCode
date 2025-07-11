let score = "suryansh"
console.log(score)
console.log(typeof score)//console.log(typeof(score))//Strings

let ValueInNumber = Number(score)
console.log(typeof(ValueInNumber))//Number
console.log(ValueInNumber)//NaN

/*
"33"->33
"33abc"->NaN
true->1;false->0
*/

let isLoggedIn = "Suryansh"
let booleanLoggedIn = Boolean(isLoggedIn)
console.log(booleanLoggedIn)//True

/*
1->true;0->false
""->false
"suryansh"->true
*/

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber)//"33"
console.log(typeof stringNumber)//String


/**************Operators*************** */
let value = 5
let negValue = -value
console.log(negValue) // -5

// console.log(2 + 2)
// console.log(2 - 2)
// console.log(2 * 2)
// console.log(2 / 2)
// console.log(2 ** 2)
// console.log(2 % 2)

let str1 = "Suryansh"
let str2 = " Sharma"
let str3 = str1 + str2
console.log(str3) // Suryansh Sharma

console.log("1" + 2) // "12"
console.log(1 + "2") // "12"
console.log("1" + 2 + 2) // "122"
console.log(1 + 2 + "2") // "32"

console.log((3+4)*5%3) // 2

console.log(+true) //1
// console.log(true+);error
console.log(+"");//0
console.log(+"suryansh") //NaN

let num1,num2,num3;

num1=num2=num3=5;
console.log(num1,num2,num3) // 5 5 5

let gameCounter = 100
gameCounter++;// gameCounter = gameCounter + 1;++gameCounter;//increament and decreament operator(gameCounter--,--gameCounter)
console.log(gameCounter) // 101