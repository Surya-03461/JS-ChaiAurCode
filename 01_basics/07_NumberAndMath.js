const score = 400
//console.log(score)// 400

const newScore = new Number(100)
//console.log(newScore)// [Number: 100]

//console.log(newScore.toString().length) // 3
//console.log(newScore.toFixed(2)) // 100.00

const Price = 123.8966
//console.log(Price.toPrecision(4)) // 123.9

const hundreds = 1000000
//console.log(hundreds.toLocaleString()) // 1,000,000
//console.log(hundreds.toLocaleString('en-IN')) //10,00,000 

//++++++++++++++++Maths++++++++++++++++

// console.log(Math)
// console.log(Math.abs(-10))//10
// console.log(Math.round(4.3))//4
// console.log(Math.round(4.6))//5
// console.log(Math.ceil(4.3))//15
// console.log(Math.floor(4.9))//4
// console.log(Math.min(1,3,2,4,5))//1
// console.log(Math.max(1,3,2,4,5))//5

 
console.log(Math.random())//0.36975338866111795(Results in between 0 and 1)
console.log(Math.random() * 10)//3.697533886611795(Results in between 0 and 10)
console.log((Math.random() * 10) + 1)// 6.369753388661117 (Results in between 1 and 10)
console.log(Math.floor((Math.random() * 10)) + 1)// 8(Results in integer between 1 and 10)


const min =10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min) // 14(Results in integer between 10 and 20)