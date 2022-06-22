//set an environmental variable
const envi = process.env.envi

const log = envi =="DEV" ? (...args) => console.log(...args): () => null
log('hi there')


log(typeof log)


function productionCode(money){
  let highStakes = "Important"
  let value = 1000000
  let valueAdded = value + value
  log (valueAdded, money)
}


productionCode("lets")