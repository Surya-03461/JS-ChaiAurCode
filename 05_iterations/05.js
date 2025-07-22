//for each loop -> Only used with arrays(takes callback)
const coding = ["JS","Ruby","Java","Python","C++"]

coding.forEach( function (val) {
    console.log(val)
} )


//************************************

coding.forEach( (val) => {
    console.log(val)
} )

//************************************

function printMe(msg){
    console.log(msg)
}

coding.forEach(printMe)

/* 
//OutPut for all above three is same : -
JS
Ruby
Java
Python
C++
*/

coding.forEach( (item,index,arr) => {
    console.log(item,index,arr)
})
/*
JS 0 [ 'JS', 'Ruby', 'Java', 'Python', 'C++' ]
Ruby 1 [ 'JS', 'Ruby', 'Java', 'Python', 'C++' ]
Java 2 [ 'JS', 'Ruby', 'Java', 'Python', 'C++' ]
Python 3 [ 'JS', 'Ruby', 'Java', 'Python', 'C++' ]
C++ 4 [ 'JS', 'Ruby', 'Java', 'Python', 'C++' ]
*/


//*************************************************************************************

const myCoding = [
    {
        languageName : "JavaScript",
        languageFilename : "JS"
    },{
        languageName : "Python",
        languageFilename : "Py"
    },{
        languageName : "C++",
        languagName : "Cpp"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName)
} )

/*
JavaScript
Python
C++
*/