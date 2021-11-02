let myArray = ['item1', 'item2', 3, true]
// for-of loop
for (let element of myArray) {  
    console.log(element)
}

//for-in loop
for (let index in myArray) {
    console.log("myArray["+ index+"]:"+myArray[index])
}