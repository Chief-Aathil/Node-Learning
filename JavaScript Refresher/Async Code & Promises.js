//setTimeout executes the provided function once the timeout is expired
setTimeout(() => {
    console.log('Timer is done')
}, 20)
console.log('here')  //this will be executed before the above provided function.



const handler = (fn1, fn2) => {     //takes function object/reference
    console.log("Inside handler()")
    fn1()
    setTimeout(fn2, 2000)       //calls the function after the given timeout
}




handler(() => {
    console.log('Clearing console in 2 sec')
    },
    console.clear
)