function once(func){
  let trigger = true
  return (...args) => {
    if(trigger){
    trigger = false
    let res = func(...args)
    return res
    }
    return null
  }
}


myFunc = (x) => x + 2

onceFunc = once(myFunc)

console.log(onceFunc(4))

console.log(onceFunc(4))

console.log(onceFunc(4))


// can use LoDash to run func once with __once from LoDash