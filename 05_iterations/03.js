//for of loop

//["","",""]
//[{},{},{}]

let arr = [1,2,3,4,5]
for (const num of arr) {
    console.log(num)
}

/* 
1
2
3
4
5
*/

const name = "Suryansh Sharma"
for (const char of name) {
    console.log(`char is ${char}`)
}
/* 
char is S
char is u
char is r
char is y
char is a
char is n
char is s
char is h
char is  
char is S
char is h
char is a
char is r
char is m
char is a
*/

//Maps :- data stored in key-value format but remembers order of arrangement of data variables(input).Also takes unique data
//Maps are not iterable generally But we can do it by some techniques
const map = new Map()
map.set("IN","INDIA")
map.set("USA","United States of America")
map.set("FR","FRANCE")
map.set("CH","CHINA")

/*console.log(map)
Map(4) {
  'IN' => 'INDIA',
  'USA' => 'United States of America',
  'FR' => 'FRANCE',
  'CH' => 'CHINA'
}
*/

for (const [key,val] of map){
    console.log(`${key} : ${val}`)
}
/*
IN : INDIA
USA : United States of America
FR : FRANCE
CH : CHINA
*/

//Objects
const MyObj = {
    game1 : "NFS",
    game2 : "SpiderMan"
}
//for of loop doesnot work here
//Here,for in loop comes into rescue