//reduce():-
const arr = [1,2,3,4,5]

const initial_value = 0
const SumWithInitial = arr.reduce( (accumulator,currentVal) => accumulator + currentVal , initial_value )

console.log(SumWithInitial)//15

/*
const arr = [1,2,3,4,5]
const Total = arr.reduce( function (acc,curval) => {
    console.log(`acc : ${acc} and curval : ${curval}`)
    return acc + curval
},0 ) 
console.log(Total)
*/

//************************************************************************************************
const myShoppingCart = [
    {
        CourseName : "Js",
        Price : 1999    
    },
    {
        CourseName : "Python",
        Price : 999
    },
    {
        CourseName : "C++",
        Price : 2499
    },
    {
        CourseName : "Data Science" ,
        Price : 12999
    }
]

const Total = myShoppingCart.reduce( (acc,item) => acc + (item.Price) ,0 )
console.log(Total)//18496