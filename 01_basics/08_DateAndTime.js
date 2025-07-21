//Dates
let myDate = new Date()
// console.log(myDate.toString()) // Current date and time
// console.log(myDate.toDateString()) // Current date
// console.log(myDate.toLocaleString()) // Current date and time in local format
// console.log(typeof myDate)// Object

//Date Object
let MyDate = new Date(2025, 0 , 1)// January 1, 2025
let MyDate2 = new Date(2025, 0 , 1 , 21 , 33)// January 1, 2025 at 21:33
let MyDate3 = new Date("2025-07-09")// July 9, 2025
let MyDate4 = new Date("09-07-2025")//  July 9, 2025 in MM-DD-YYYY format
//console.log(MyDate4.toLocaleString())// "9/7/2025, 12:00:00 AM" (Date in local format)

let timestamp = Date.now()
//console.log(timestamp) // (1752077873806)Current timestamp from 1 Jan  1970 in milliseconds
//console.log(MyDate4.getTime()) // (1752019200000)Timestamp of MyDate4 in milliseconds from 1 Jan  1970
//console.log(Date.now() / 1000)// Current timestamp in seconds from 1 Jan  1970

let newDate = new Date()
console.log(newDate)// Get current date and time
console.log(newDate.getMonth()+1)// Months are 0-indexed, so we add 1 to get the correct month
console.log(newDate.getFullYear())// Get the current year
console.log(newDate.getDate())// Get the current date
console.log(newDate.getDay())// Get the current day of the week (0-6, where 0 is Sunday)
console.log(newDate.getHours())// Get the current hour
console.log(newDate.getMinutes())// Get the current minutes
console.log(newDate.getSeconds())// Get the current seconds


//it customizes the date and time format
newDate.toLocaleString('default',{         
    weekday: 'long', // 'short' for abbreviated day name
    year: 'numeric', // '2-digit' for two-digit year
    month: 'long', // 'short' for abbreviated month name
    day: 'numeric', // '2-digit' for two-digit day
    hour: '2-digit', // 'numeric' for unpadded hour
    second: '2-digit', // 'numeric' for unpadded second
    timeZoneName: 'short' // 'long' for full timezone name   
})

console.log(newDate.getDay())