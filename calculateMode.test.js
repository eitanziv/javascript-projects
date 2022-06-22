const { TestWatcher } = require("jest")
const calculateMode = require("./calculateMode")

test('returns mode of array with single recurring element', () =>{
  expect(calculateMode([1,2,3,3])).toEqual([3])
})

test('returns mode of array with two equally recurring element', () =>{
  expect(calculateMode([1,1,2,2])).toEqual([1,2])
})

test('returns original list if no mode', () =>{
  expect(calculateMode([1,2,3])).toEqual([1,2,3])
})

