//map():it will return the array by directly updating the array  without any condition check

const nums = [1,2,3,4,5,6,7,8,9,10]
const newArr = nums.map( (num) => num+10)//const newArr = nums.map( (num) => {return num+10})
console.log(newArr)
/*
[
  11, 12, 13, 14, 15,
  16, 17, 18, 19, 20
]
*/


//***************************************************************************************************************
//Chaining:-using two or more methods directly
const Nums = [1,2,3,4,5,6,7,8,9,10]
const NewArr = Nums
               .map( (num) => num+10)//[10,20,30,40,50,60,70,80,90,100]
               .map( (num) => num + 1 )//Here num is updated array's num;[11,21,31,41,51,61,71,81,91,101]
               .filter( (num) => num >=40 )//[41,51,61,71,81,91,101]
console.log(newArr)//[41,51,61,71,81,91,101]