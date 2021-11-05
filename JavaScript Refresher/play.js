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


//arrow functions
const foo = (arg1) => {
    return ("Inside foo()...\narg1: " + arg1)
}

const add = (a, b) => a + b  //no braces and return statement.since only one statement in function body
const nextNum = (a) => a + 1
const prevNum = a => a - 1   //no paranthesis for input arguments. since only one argument
const printMsg = () => console.log('Inside printMsg()')
console.log(nextNum(9))
console.log(prevNum(10))
console.log(add(1, 2))
console.log(foo("johndoe"))
printMsg()

console.clear()
const person = {
    name: 'John',
    age: 10,
    greet: () => {
        console.log("Hi I am "+this.name) //this in arrow function refers to globalThis
    },
    sayHi: function () {                //here this refers to the object
        console.log("Hi I am "+this.name)
    },
    foo() {         //here also 'this' refers to the object
        console.log("Hi I am "+this.name)    }
}
person.greet()
person.sayHi()
person.foo()

console.log(username + ' is ' + age + ' years old')  //concatenation
console.log(`${username} is ${age} years old`)      //template literal. 