const add = a => b => c => a + b + c

const add5 = add(5)

const add100 = add(100)

const add105 = add5(12)(3)

console.log(add105)