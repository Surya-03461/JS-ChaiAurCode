//Terniary Operator
// (condition) ? true : false
const iceCream = 100

iceCream >= 80 ? console.log("More than 80") : console.log("Less than 80")//Output:-More than 80

//******************************************************************************
/*Nullish Coalescing Operator (??) : Used with the help of null undefined*/
/*While taking input from databases or api, in order to avoid the case of null or undefined in input we
use (??) operator to store null or undefined in variable when nothing is given in input.
But if some input is given then first occurnace of a number gets stored in variable.
In case of undefied and null then undefined is stored.*/

const val1 = 5 ?? 10
const val2 = null ?? 15
const val3 = undefined ?? 20
const val4 = null ?? undefined
console.table([val1,val2,val3,val4])
/* 
┌─────────┬───────────┐
│ (index) │ Values    │
├─────────┼───────────┤
│ 0       │ 5         │
│ 1       │ 15        │
│ 2       │ 20        │
│ 3       │ undefined │
└─────────┴───────────┘
*/

const val = null ?? 5 ?? 10
console.log(val)//5