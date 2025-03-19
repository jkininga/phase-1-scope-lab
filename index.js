// Write your solution in this file!
var customerName = 'bob'
const leastFavoriteCustomer = 'carol'


//access the global variable customerName and codifies it to uppercase 
function upperCaseCustomerName()
{
  customerName  =  customerName.toUpperCase()
}
//console.log(upperCaseCustomerName())


//declares a global variable bestCustomer and assigns it to 'not bob'
function setBestCustomer()
{
    return bestCustomer = 'not bob'
}
//onsole.log(setBestCustomer())

//another function is able to access the global variable and set the same variable it to anther thing since it is a global variable

function overwriteBestCustomer()
{
    return bestCustomer = 'maybe bob'
}

//console.log(overwriteBestCustomer())


function changeLeastFavoriteCustomer()
{
    return leastFavoriteCustomer = "James"
}

//console.log(changeLeastFavoriteCustomer())