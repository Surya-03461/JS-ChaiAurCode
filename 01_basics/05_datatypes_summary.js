 //Primitive data types:-NUmber,String,BigInt,Boolean,Null,Undefined

const score = 100;
const scoreValue = 100.2;
const isLoggedIn = false;
const outsideTemp = null;
let userEmail;//by default it is undefined or we can define as:let username = undefined;
const id = Symbol('123');
const anotherid = Symbol('123');
console.log(id);
console.log(anotherid);
console.log(id === anotherid); //false
const BigNUmber = 1132545645824437832964843n
console.log(typeof BigNUmber);
const bigIntValue = BigInt(1132545645824437);
console.log(bigIntValue);

//Non-primitive data types:-Object,Array,Function
const heroes = ['Shaktiman','Nagraj','Doga'];
let myObj = {
    name:'Suryansh',
    age:18
}

const myfunction = function() {
    console.log('Hello World');
}


//Important results

console.log(typeof score); //number
console.log(typeof scoreValue); //number
console.log(typeof isLoggedIn); //boolean
console.log(typeof outsideTemp); //object
console.log(typeof userEmail); //undefined
console.log(typeof id); //symbol
console.log(typeof bigIntValue); //bigint
console.log(typeof myObj); //object-function
console.log(typeof myfunction); //function

//Almost all non-primitive data types are function-objects in JavaScript