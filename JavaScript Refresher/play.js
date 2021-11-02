const username = 'john'  //constant variable, value cannot be changed
let age = 10            //normal variable
let isOnline = true

//username='John'  // this will raise an error since username is a const and cannot be changed
function formatData(userName, userAge, userStatus) {
    return (userName + ' is aged ' + userAge + '. Online:' + userStatus)
}

console.log(formatData(username, age, isOnline))

const myfunc = function () { return "Inside myfunc()" }  //function definition without a name
console.log(myfunc())
const myfunc1 = myfunc
console.log(myfunc1())


//arrow function
const foo = (arg1) => {
    return( "Inside foo()...\narg1: "+arg1)
}
console.log(foo("johndoe"))