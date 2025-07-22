const myObject = {
    js : "JavaScript",
    cpp : "C++",
    rb : "Ruby",
    swift : "swift by Apple"
}
//for on loop works on objects and some other data types
//return iterator as keys 
for (const key in myObject) {
    console.log(`${key} :- ${myObject[key]}`)
}
/* 
js :- JavaScript
cpp :- C++
rb :- Ruby
swift :- swift by Apple
*/