const accountID = 35174727
let account_Email = "suryansh@gmail.com"
var accountPassword = "12345"
//accountCity = Delhi //should not be preffered and sometimes give error

console.log(accountID)//used to display content on console(screen)

console.table([accountID,account_Email,accountPassword])//used to display content on console(screen) in tabular form

/* 
We donot use var as keyword and datatype of any variable due to issue in dlock scope and functional scope
*/

//updating variable's values
//accountID = 216427//error as we cannot change value of const variable
account_Email = "surya@gmail.com"
accountPassword = "22211212"

console.table([accountID,account_Email,accountPassword])