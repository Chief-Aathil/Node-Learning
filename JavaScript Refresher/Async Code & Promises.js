//setTimeout executes the provided function once the timeout is expired
// setTimeout(() => {
//     console.log('Timer is done')
// }, 20)
// console.log('here')  //this will be executed before the above provided function.



const handler = (fn1, fn2) => {     //takes function object/reference
    console.log("Inside handler()")
    fn1()
    setTimeout(fn2, 4000)       //calls the function after the given timeout
}

const f1 = () => {
    console.log('inside f1()')
}
const f2 = () => {
    console.log('inside f2()')
}



// handler(() => { console.log('Clearing console in 4 sec') }
//     , console.clear
// )
handler(f1, f2)