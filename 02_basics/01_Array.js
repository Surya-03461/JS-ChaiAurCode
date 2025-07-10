//Array -> Collection of same or different types of data values
//values can be accessed using 0-based indexing

const arr = [1,2,3,4,5]
const arr2 = [1,'a',true,undefined,null,NaN]
const Heroes = ["Shaktiman","Nagraaj"]

const myArr = new Array(1,2,3,4,5,6)// Array constructor

console.log(myArr)
console.log(myArr[2])

//Array Methods

console.log(arr.length) //length of array
console.log(arr[arr.length - 1]) //last element of array
myArr.push(7) //adds element at the end of array
console.log(myArr)
myArr.pop() //removes last element of array
console.log(myArr)

myArr.unshift(8) //adds element at the beginning of array
console.log(myArr)
myArr.shift() //removes first element of array
console.log(myArr)