// REMEMBER TO PSEUDOCODE
const pad = (array, minSize, value=null) => {
  if (array.length < minSize){
    // create a variable for differnce of min_size and the current legnth for the amount to pad the array
    let numOfTimes = minSize - array.length
    //create am array of the values to pad and the amount of times to pad the array
    //make a new array combining the new and input array and return it.
    let valueArray = Array(numOfTimes).fill(value)

    //make a new array combining the new and input array and return it.
    let newArray = [].concat(array, valueArray);
    return newArray
  }
  else if (minSize <= array.length){
    return array
  } 
}



console.log(pad([1,2,3], 5))

console.log([1,2,3])

console.log(pad([1,2,3], 5, 'apple'))
// if len(array) < min_size:
//         # create a variable for differnce of min_size and the current legnth for the amount to pad the array
//         times= min_size - len(array)
//         #create a list of the values to pad and the amount of times to pad the array
//         value_array = [value] * times
//         #make a new array combining the new and input array and return it.
//         new_array = array + value_array
//         return new_array
//     # return the orginal array with min_size input is less then or equal to the length of the input array   
//     elif min_size <= len(array):
//         return array
  