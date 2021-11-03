let myArray = ['item1', 'item2', 3, true]
// for-of loop
for (let element of myArray) {
    console.log(element)
}

//for-in loop
for (let index in myArray) {
    console.log("myArray[" + index + "]:" + myArray[index])
}

//create map from array
let myMap = myArray.map(ele => 'element:' + ele)
console.log(myMap)

console.clear()
const arr = [1, 2, 3, 4]
console.log(arr)
arr.push(5)     // this is allowed eventhough arr is a const.
/* this is because arr is a reference to the memory location where 
    the actual array is stored
*/
console.log(arr)
arr1 = arr      //copies reference
arr2 = [arr]
arr3 = [...arr] //spread operator . this copies arr to arr3
arr1.push(6) // this change is reflected in arr also
console.log('After changes:')
console.log({ arr, arr1, arr2, arr3 })