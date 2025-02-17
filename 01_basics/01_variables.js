const accountId = 14162
let accountEmail = "raj092@google.com"
var accountPassword = "97643"
accountCity = "Jaipur"
let accountState;

// accountId = 2  //not allowed to change const

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

accountEmail = "hcfd@abd.com"
accountPassword = "27182819"
accountCity = "Bengaluru"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
