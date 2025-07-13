// const tinderUser = new Object()//creating an empty object using constructor
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "John Doe"
tinderUser.isLoggedIn = false

//console.log(tinderUser)//{ id: '123abc', name: 'John Doe', isLoggedIn: false }

const regularUser = {
    email:"surya@gmail.com",
    fullName:{
        userFullname:{
            firstName:"Suryansh",
            lastName:"Sharma"
        }
    } 
}

// console.log(regularUser.email)//"surya@gmail.com"
// console.log(regularUser.fullName.userFullname.firstName)//"Suryansh"
// console.log(regularUser.fullName.userFullname.lastName)//"Sharma"
// console.log(regularUser.fullName)//{ userFullname: { firstName: 'Suryansh', lastName: 'Sharma' } }
// console.log(regularUser.fullName.userFullname)//{ firstName: 'Suryansh', lastName: 'Sharma' }
// console.log(regularUser.fullName?.userFullname)//{ firstName: 'Suryansh', lastName: 'Sharma' }//optional chaining mostly used to avoid errors when accessing nested properties from api responses

//merging objects
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
const obj3 = {5:"e",6:"f"}

const newObj = {...obj1,...obj2,...obj3}//spread operator to merge objects
// console.log(newObj)//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6: 'f' }
const newObj2 = Object.assign({},obj1,obj2,obj3)//Object.assign to merge objects in {} object or in the 1st parameter
// console.log(newObj2)//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6: 'f' }
const newObj3 = {obj1,obj2,obj3}//this will create an object with keys as obj1, obj2, obj3
// console.log(newObj3)//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' }, obj3: { '5': 'e', '6': 'f' } }

//Array of objects
const users = [
    {
        id: 1,
        email: "surya@gmail.com"
    },
    {
        id: 2,
        email: "surya@gmail.com"
    },
    {
        id: 3,
        email: "surya@gmail.com"
    }
]

console.log(users[1])// { id: 2, email: 'surya@gmail.com' }
console.log(users[1].email)// "surya@gmail.com"

//some methods of objects
console.log(tinderUser)
console.log(Object.keys(tinderUser))//returns an array of keys of the object ["id", "name", "isLoggedIn"]
console.log(Object.values(tinderUser))//returns an array of values of the object ["123abc", "John Doe", false]
console.log(Object.entries(tinderUser))//returns an array of key-value pairs of the object [["id", "123abc"], ["name", "John Doe"], ["isLoggedIn", false]]
console.log(tinderUser.hasOwnProperty("id"))//true//returns true if the object has the property "id"
console.log(tinderUser.hasOwnProperty("age"))//false//returns false if the object does not have the property "age"