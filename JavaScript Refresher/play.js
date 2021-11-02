const username = 'john'  //constant variable, value cannot be changed
let age = 10            //normal variable
let isOnline = true

//username='John'  // this will raise an error since username is a const and cannot be changed
function formatData(userName, userAge, userStatus) {
    return( userName+' is aged '+userAge+'. Online:'+ userStatus)
}

console.log(formatData(username,age,isOnline))