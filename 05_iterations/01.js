//Iterations:-To repeat a block of code by number of times
//1.for loop
for (let i=1; i<=10; i++){
    if (i == 5){
        console.log("5 is the best number")
    }
    console.log(i)
}
/*
1
2
3
4
5 is the best number
5
6
7
8
9
10
*/
// console.log(i)//Error as it cannot be accessed 

for (let i=1; i<=10; i++){
    console.log(`Outer loop : ${i}`)
    for (let j=1; j<=10; j++){
        console.log(`${i} * ${j} = ${i*j}`)
    }
}


const myArr = ["flash","spiderman","batman"]
for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    console.log(element)
}
/* 
flash
spiderman
batman
*/