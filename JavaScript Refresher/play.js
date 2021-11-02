var username = 'john'
var age = 10
var isOnline = true

function formatData(userName, userAge, userStatus) {
    return( userName+' is aged '+userAge+'. Online:'+ userStatus)
}

console.log(formatData(username,age,isOnline))