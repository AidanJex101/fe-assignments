// Program 1

function isString(string) {
  if (typeof string != "string") {
    return false
  }
  else {
    return true
  }
}

// Program 2

function isBlankString(string) {
  for (let i = 0; i < string.length; i++) {
    if (string[i] != " ") {
      return false
    }
  }
  return true
}

// Program 3

function captializeFirst(string) {
  newString = ""
  firstLetter = false
  for (let i = 0; i < string.length; i++) {
    if (firstLetter == false && string[i] != " ") {
      newString += string[i].toUpperCase()
      firstLetter = true
    }
    else {
      newString += string[i]
    }
    
  }
  return newString
}

// Program 4

function abbr(string) {
  let newString = ""
  let previousLetter = ""

  for (let i = 0; i < string.length; i++) {
    if (previousLetter == " ") {
      newString += string[i] + "."
      break
    }
    newString += string[i]
    previousLetter = string[i]
  }
  return newString
}

// Program 5

function truncate(string, characterAmount) {
  let newString = ""
  let dotCount = 3
  for (let i = 0; i < characterAmount; i++) {
    newString += string[i]
  }
  while (dotCount > 0) {
    newString += "."
    dotCount--
  } 
  return newString
}

// Program 6

function endOfG(string) {
  let gIndex = 0
  for (let i = 0; i < string.length; i++) {
    if (string[i] == "g" || string[i] == "G") {
      gIndex = i
      break
    }
  }
  return string.slice(gIndex)
  
}

// Testing

console.log(isString("abc"))
console.log(isString(190))

console.log(isBlankString("")) 
console.log(isBlankString(" ")) 
console.log(isBlankString("fjfjf")) 

console.log(captializeFirst("abcdef")) 

console.log(abbr("Ryan Curtis")) 

console.log(truncate("I am a long sentence", 6)) 

console.log(endOfG("The practitioners grappled on the road side!"))