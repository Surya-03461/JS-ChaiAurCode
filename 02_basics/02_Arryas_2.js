const marvel_heros = ["thor","ironman","spiderman"]
const dc_heros = ["flash","superman","batman"]
//we can also take any data type in array

//marvel_heros.push(dc_heros)//recieves array dc_heros as a single element
//console.log(marvel_heros)//[ 'thor', 'ironman', 'spiderman', [ 'flash', 'superman', 'batman' ] ]

//const all_heroes = marvel_heros.concat(dc_heros)//concatenates the two arrays and returns a new array
//console.log(all_heroes)//[ 'thor', 'ironman', 'spiderman', 'flash', 'superman', 'batman' ]


const newHeros = [...marvel_heros,...dc_heros]//spread operator
console.log(newHeros)//[ 'thor', 'ironman', 'spiderman', 'flash', 'superman', 'batman' ]

const another_arr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
let my_real_flat_arr_depth2 = another_arr.flat(2)//flattens the array to 2 levels deep
let my_real_flat_arr_depth1 = another_arr.flat(1)//flattens the array to 1 level deep
console.log(my_real_flat_arr_depth2)//[ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ]
console.log(my_real_flat_arr_depth1)//[ 1, 2, 3, 4, 5, 6, 7, 6, 7, [ 4, 5 ] ]



console.log(Array.isArray("Suryansh"))//false// checks if the given value is an array or not
console.log(Array.from("Suryansh"))//[ 'S', 'u', 'r', 'y', 'a', 'n', 's', 'h' ]//converts the string to an array of characters
console.log(Array.from({name:"Suryansh"}))//returns empty array as it is not defined that whom's array has to create : keys or values

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))//[ 100, 200, 300 ] //creates an array of the given values and returns it