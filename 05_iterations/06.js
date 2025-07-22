//for each loop never returns anything
const coding = ["JS","Ruby","Java","Python","C++"]

const values = coding.forEach( (item) =>{
    // console.log(item)
    return item
})

console.log(values)

/*
undefined
*/

//*****************************************************************************
//filter() :- also takes callback.It returns values on the basis of condition being met
const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newNums = myNums.filter( (num) => num > 4);[5,6,7,8,9,10]
/* const newNums = myNums.filter( (num) => {
//     num > 4
});[]*/
const newNums = myNums.filter( (num) => {
    return num > 4
})
console.log(newNums);[5,6,7,8,9,10]


const newNum = []
const myNum = [1,2,3,4,5,6,7,8,9,10]
myNum.forEach( (val) =>{
    if (val > 4){
        newNum.push(val)
    }
} )
console.log(newNum)//[ 5, 6, 7, 8, 9, 10 ]


//********************************************************************************
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

/*const username = books.filter( (bk) => bk.genre === 'History' )

[
  {
    title: 'Book Three',
    genre: 'History',
    publish: 1999,
    edition: 2007
  },
  {
    title: 'Book Seven',
    genre: 'History',
    publish: 1986,
    edition: 1996
  }
]
@S
*/

// const username = books.filter( (bk) => bk.publish >= 2000 )
/*const username = books.filter( (bk) => {
    return bk.publish >= 2000 
})
[
  {
    title: 'Book Five',
    genre: 'Science',
    publish: 2009,
    edition: 2014
  },
  {
    title: 'Book Eight',
    genre: 'Science',
    publish: 2011,
    edition: 2016
  }
]*/

const username = books.filter( (bk) => bk.genre === 'History' && bk.publish > 1995 )
/* 
[
  {
    title: 'Book Three',
    genre: 'History',
    publish: 1999,
    edition: 2007
  }
]
*/

console.log(username)