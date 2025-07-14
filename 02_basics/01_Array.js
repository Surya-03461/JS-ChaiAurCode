//Array -> Collection of same or different types of data values
//values can be accessed using 0-based indexing

const arr = [1,2,3,4,5]
const arr2 = [1,'a',true,undefined,null,NaN]
const Heroes = ["Shaktiman","Nagraaj"]

const myArr = new Array(1,2,3,4,5,6)// Array constructor(Array Object)

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

// console.log(myArr.indexOf(5)) //returns index of element
// console.log(myArr.indexOf(9)) //returns -1
// console.log(myArr.includes(5)) //returns true if element is present
// console.log(myArr.reverse()) //Reverse the array
// console.log(myArr.sort()) //Sorts the array in ascending order
// console.log(myArr.slice(1, 3)) //returns a shallow copy of a portion

const newArr = [0,1,2,3,4,5,6]
const jArr = newArr.join()//joins all elements of an array into a string with given separator
console.log(typeof jArr) //string type
console.log(jArr) //0,1,2,3,4,5,6//"0,1,2,3,4,5,6"


//Slice and Splice
console.log("A",myArr)

const myN1 = myArr.slice(1,3)//returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included)
console.log(myN1) //returns a new array with elements from index
console.log("B",myArr) //returns a new array with elements from index

const myN2 = myArr.splice(1,3)//changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
console.log(myN2) //returns an array with removed elements
console.log("C",myArr) //returns a new array with elements from index

//Difference between slice and splice:-
//In splice, array is manipulated but in slice, array is not manipulated
//splice modifies the original array, slice does not modify the original array
//splice can add or remove elements, slice only returns a portion of the array