// Challenge 1

function countByTwos(maxNum) {
  for (let i = 0; i < maxNum; i++) {
    if (i % 2 == 0) {
      console.log(i)
    }
  }
}

// Challenge 2

function removeByIndex(valuesArray, indexArray) {
  newArray = []
  for (let i = 0; i < indexArray.length; i++) {
    newArray.push(valuesArray[indexArray[i]])
  }
  return newArray
}

// Challenge 3

function numStringToArray(string) {
  newArray = []
  for (let i = 0; i < string.length; i++) {
    num = parseInt(string[i])
    newArray.push(num)
  }
  return newArray
}

//  Challenge 4

function newMatrix(numArray, letterArray) {
  newMatrix = []
  for (let i = 0; i < numArray.length; i++) {
    for (let j = 0; j < letterArray.length; j++) {
      newArray1 = []
      newArray2 = []
      newArray1.push(numArray[i], letterArray[j])
      newArray2.push(letterArray[j], numArray[i])
      newMatrix.push(newArray1, newArray2)
    }
  }
  return newMatrix
}

// Testing

countByTwos(12)

console.log(removeByIndex(['a', 'b', 'c', 'd', 'f', 'f', 'e', 'f'], [1, 5]))

console.log(numStringToArray("12345"))

console.log(newMatrix([1, 2, 3], ["a", "b", "c", "d"]))