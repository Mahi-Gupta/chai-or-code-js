const accountId = 144675
let accountEmail = "mahi444@gmail.com"
var accountPassword = "12345"
accountCity = "Lucknow"   //Not a good practice
let accountState;   //By default, the value is undefined

// accountId = "456789" //NOT ALLOWED since values of constants cannot be changed

accountEmail="mahi555@gmail.com"
accountPassword="67890"
accountCity="Jaipur"

/*
Prefer not to use var
because of issues in block scope and functional scope
*/

console.log(accountId);
console.table([accountEmail,accountPassword,accountCity,accountState]);  //just a way to print the values in table format