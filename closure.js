
// closure is when a function returns another function and there is a local variable
//  java script uses a closure to maintain a reference to the value of the variable if used within a function that it returns
// can be used to hide data
// garbage collection is an automated process that . .. 

function counter(){
  // let unused = true
  let count = 0
  return function(){
    return count++
  }
}

let myCounter = counter()

console.log(myCounter())
console.log(myCounter())
console.log(myCounter())
console.log(myCounter())
console.log(myCounter())
console.log(myCounter())