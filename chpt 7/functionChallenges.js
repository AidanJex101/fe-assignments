// Challenge 1

function longestWordInArray(array) {
  let longestWordIndex = 0
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > array[longestWordIndex].length) {
      longestWordIndex = i
    }
  }
  return array[longestWordIndex]
}

// Challenge 2

function swapFirstAndLast(string) {
  let firstCharacter = string[0]
  let lastCharacter = string[string.length - 1]
  let newString = ""
  for (let i = 0; i < string.length; i++) {
    if (i == 0) {
      newString += lastCharacter
    }
    else if (i == (string.length - 1)) {
      newString += firstCharacter
    }
    else {
      newString += string[i]
    }
  }
  return newString
}

// Challenge 3

function sum(array) {
  let count = 0
  for (let i = 0; i < array.length; i++) {
    count += array[i]
  }
  return count
}

// Challenge 4

function combineArrays(array1, array2) {
  let newArray = []
  let leftOvers
  while (array1.length != 0 || array2.length != 0) {
    newArray.push(array1.shift(), array2.shift())
  }
  if (array1.length > 0) {
    leftOvers = array1
  }
  else {
    leftOvers = array2
  }
  for (let i = 0; i < leftOvers.length; i++) {
    newArray.push(leftOvers[i])
  }
  return newArray
}

// Challenge 5

function titleCaseString(string) {
  let previous_letter = ""
  let newString = ""

  for (let i = 0; i < string.length; i++) {
    if (previous_letter == " ") {
      newString += string[i].toUpperCase()
    }
    else {
      newString += string[i]
    }
    
    previous_letter = string[i]
  }
  return newString
}

// Challenge 6

function longestWordInString(string) {
  let stringArray = []
  let previous_letter = ""
  let currentWord = ""
  for (let i = 0; i < string.length; i++) {
    if (previous_letter == " ") {
      stringArray.push(currentWord)
      currentWord = "" + string[i]
    }
    else {
      currentWord += string[i]
    }
    previous_letter = string[i]
  }
  return longestWordInArray(stringArray)
}

// Challenge 7

function alphabeticalString(string) {
  alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  newString = ""
  for (let i = 0; i < alphabet.length; i++) {
    for (let j = 0; j < string.length; j++) {
      if (alphabet[i] == string[j].toLowerCase()) {
        newString += string[j]
      }
    }
  }
  return newString
}

// Challenge 8

function removeByIndex(valuesArray, indexArray) {
  newArray = []
  for (let i = 0; i < indexArray.length; i++) {
    newArray.push(valuesArray[indexArray[i]])
  }
  return newArray
}

// Challenge 9

user = {
  username: "AidanJex101",
  activeStatus: "away",
  toString() {
    return this.username + " is " + this.activeStatus
  }
}

let login = (user) => {
  user.activeStatus = "active"
  console.log(user.toString())
}

// Challenge 10

function pow(num1, num2) {
  let currentNum = num1
  if (num2 != 1) {
    for (let i = 0; i < num2 - 1; i++) {
      currentNum *= num1
    }
  }
  return currentNum
}


// Testing

console.log(longestWordInArray(['a', 'b', 'cc']))
console.log(swapFirstAndLast("ryan"))
console.log(sum([1, 2, 3]))
console.log(combineArrays([1, 2, 3], [4, 5, 6]))
console.log(titleCaseString("I am a sentence"))
console.log(longestWordInString("This string has several different values"))
console.log(alphabeticalString("Hi there"))
console.log(removeByIndex(['a', 'b', 'c', 'd'], [1, 3]))
login(user)
console.log(pow(4, 2))