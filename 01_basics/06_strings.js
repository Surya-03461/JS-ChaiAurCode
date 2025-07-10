let name = "Suryansh"; 
let age = 18;

console.log("My name is " + name + " and I am " + age + " years old.");//Generally,it is an old practice to write code in this way
/*
My name is Suryansh and I am 18 years old.
My name is Suryansh and I am 18 years old!
*/
console.log(`My name is ${name} and I am ${age} years old!`);//this is a better practice and mostly used in projects development

let string = new  String("Suryansh Sharma")//Another way to dfine a strings an objrct-class
console.log(string);//[String: 'Suryansh Sharma']


/*
String {'Suryansh'}[Value in key-value pair format]
0:"S"
1:"u"
2:"r"
3:"y"
4:"a"
5:"n"
6:"s"
7:"h"
length:8
*/

const gameName = "GTA V"
console.log(gameName.length);//5
console.log(gameName[4]);//V
console.log(gameName.__proto__);//String.prototype

console.log(gameName.toUpperCase());//GTA V
console.log(gameName.toLowerCase());//gta v
console.log(gameName.indexOf("V"));//4
console.log(gameName.charAt(0));//G  

const newString = gameName.substring(0,2);//GT 
console.log(newString);//GT

console.log(gameName.slice(0,2));//GT
console.log(gameName.slice(-5,4));//GTA 
console.log(gameName.replace(' ','-'));//GTA-V

let newStringOne = "     Suryansh      ";//whitespace at the start and end
console.log(newStringOne);//     Suryansh      
console.log(newStringOne.trim());//Suryansh//removes all the whitespaces from start and end of a string.

const url = "https://hitesh.com/hitesh%20choudhary%20channel";
console.log(url.replace("%20", "-"));//https://hitesh.com/hitesh-choudhary//Replaces first occurance of the given substring.
console.log(url.replaceAll("%20", "-"));//https://hitesh.com/hitesh-choudhary-channel //Replaces all the occurances of the given substring.

console.log(url.includes("hitesh"));//true
console.log(url.includes("chanda"));//false

console.log(gameName.split(" "));//[ 'GTA', 'V' ]//Splits the string into an array of substrings based on the given separator.