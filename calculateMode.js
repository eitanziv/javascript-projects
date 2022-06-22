// write a function to calculate mode that takes a list as input
// get number of occurance for each item in array
//create an object - OCCURENCES
//every key should be an object in the list
//ITERATE throught list  IF VALUE in LIST is a KEY in OCCURENCES then OCCURENCES [KEY]+=1
//ELSE:  OCCURENCES[key]=1
//SORT IN REVERSE ORDER and RETURN TOP VALUES
// 

//create an ARRAY of LIST KEYS
const calculateMode = (list) => {
  let occurences = {}
  for (let i = 0; i< list.length; i++){
    if (list[i] in occurences){
      occurences[list[i]] += 1
    } else {
      occurences[list[i]]=1
    }
  }
  let keys = Object.keys(occurences)
  let results = []
  let maxValue = 0
  for (key of keys){
  
    if (occurences[key] > maxValue){
    maxValue = occurences[key]
    results = []
    results.push(key)
  } else if (occurences[key]== maxValue){
    results.push(key)
    }
  }
  return results
}
// calculateMode(["who","what", "where", "who", "when"])

module.exports = calculateMode

