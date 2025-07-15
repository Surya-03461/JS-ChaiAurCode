//Rest operator allows us to pass an indefinite number of arguments to a function(...args) and it will be stored in an array.
function calculateCartPrice(...num1){
    return num1;
}

console.log(calculateCartPrice(10, 20, 30, 40)); // [10, 20, 30, 40]

function calculatePrice(val1,val2,...num1){//
    return num1;
}

console.log(calculatePrice(10, 20, 30, 40)); // [30, 40]

const user = {
    name: "Surya",
    price: 199
}

function handleObject(anyUser){
    console.log(`Username is ${anyUser.name} and price is ${anyUser.price}`);
}
//handleObject(user); // Username is Surya and price is 199
handleObject({
    name: "Surya",
    price: 199
});

function handleObjects(anyUser){
    console.log(`Username is ${anyUser.name} and price is ${anyUser.prices}`);
}

handleObjects(user)// Username is Surya and price is undefined


//Passing arrays to functions
let MyArray = [10, 20, 30, 40];
function getVal(arr){
    return arr[2];//3rd value of array as 30 
}
console.log(getVal(MyArray)); // 30