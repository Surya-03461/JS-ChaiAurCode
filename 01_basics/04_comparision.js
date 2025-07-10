//Comparison Operators in JavaScript:-(Results in true and false)
// console.log(2>1)
// console.log(2<1)
// console.log(2<=1)
// console.log(2>=1)
// console.log(2==1)
// console.log(2!=1)

//some unexpected and important results
console.log("2" == 2)// true, because == converts the string to a number
console.log("2" === 2)// false, because === checks for strict equality (type and value)
console.log("2" != 2)// false, because != converts the string to a number
console.log("2" !== 2)// true, because !== checks for strict inequality

console.log(null == 0)// false, because null is not equal to 0
console.log(null > 0)// false, because null is treated as 0 in comparisons
console.log(null >= 0)// true, because null is treated as 0 in comparisons
console.log(null != 0)// true, because null is not equal to 0

console.log(undefined == null)// true, because undefined is loosely equal to null
console.log(undefined === null)// false, because undefined and null are different types
console.log(undefined == 0)// false, because undefined is not equal to 0
console.log(undefined > 0)// false, because undefined is not a number
console.log(undefined <= 0)// false, because undefined is not a number
console.log(undefined != 0)// true, because undefined is not a number