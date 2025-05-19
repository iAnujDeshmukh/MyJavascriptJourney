const accountId = 123
let userName = "anuj"
var age = 12 
city = "Banglore"
let accountStatus;
// accountId = 111 --> TypeError: Assignment to constant variable.
/*
Prefer not to use var, because of the function-scoped and block-scoped issue
*/


console.table([accountId,userName,age,city,accountStatus]);



