//While loop

let index = 0
while (index <=5 ){
    console.log(index)
    index++
}
/*
0
1
2
3
4
5
*/

let myArr = ["Nagraj","Doga","Shaktiman"]
let arr = 0
while (arr < myArr.length){
    console.log(myArr[arr])
    arr++
}
/*
Nagraj
Doga
Shaktiman
*/

//****************************************************************************************

//do-while loop(runs atleast one times)
let score = 1 
do {
    console.log(`Value of score is ${score}`)
    score++
}while(score<=10)
/*
Value of score is 1
Value of score is 2
Value of score is 3
Value of score is 4
Value of score is 5
Value of score is 6
Value of score is 7
Value of score is 8
Value of score is 9
Value of score is 10
*/

let val = 11 
do {
    console.log(`Value of score is ${score}`)
    score++
}while(score<=10)//Value of score is 11