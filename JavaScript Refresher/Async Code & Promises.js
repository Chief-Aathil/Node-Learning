//setTimeout executes the provided function once the timeout is expired
// setTimeout(() => {
//     console.log('Timer is done')
// }, 20)
// console.log('here')  //this will be executed before the above provided function.

const handler = (fn1, fn2, timeout) => {
  //takes function object/reference
  console.log("Inside handler(). timeout:", timeout);
  fn1();
  setTimeout(fn2, timeout); //calls the function after the given timeout
};

const f1 = () => {
  console.log("inside f1()");
};
const f2 = () => {
  console.log("inside f2()");
};

// handler(() => { console.log('Clearing console in 4 sec') }
//     , console.clear
// )
//handler(f1, f2, 2000);

/*Promises*/
const myPromise = new Promise((resolveFn, rejectFn) => {
    resolveFn("Done!");
});

myPromise
    .then(f1)
    .then(f2)

    
myPromise.then(err => console.log(err));