let score = "suryansh"
console.log(score)
console.log(typeof score)//console.log(typeof(score))

let ValueInNumber = Number(score)
console.log(typeof(ValueInNumber))
console.log(ValueInNumber)

/*
"33"->33
"33abc"->NaN
true->1;false->0
*/

let isLoggedIn = "Suryansh"
let booleanLoggedIn = Boolean(isLoggedIn)
console.log(booleanLoggedIn)

/*
1->true;0->false
""->false
"suryansh"->true
*/

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)


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

console.log((3+4)*5%3)

console.log(+true)
// console.log(true+);error
console.log(+"");

let num1,num2,num3;

num1=num2=num3=5;
console.log(num1,num2,num3) // 5 5 5

let gameCounter = 100
gameCounter++;// gameCounter = gameCounter + 1;++gameCounter;//increament and decreament operator
console.log(gameCounter) // 101