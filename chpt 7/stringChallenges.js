// Program 1

function isString(string) {
  if (typeof string != "string") {
    return false
  }
  else {
    return false
  }
}

// Program 2

function isBlankString(string) {
  for (letter in string) {
    if (letter != " ") {
      return false
    }
  }
  return true
}

// Program 3

function capitilizeFirst(string) {
  string[0].toUpperCase()
  return string
}

// Program 4

function abbr(string) {
  let previous_letter = ""
  let onLastName = False
  for (let i = 0; i < string.length; i++) {
    if (previous_letter == " " && onLastName == False) {
      string[i + 1] = "."
      stringArray = string.split(".")
      string = stringArray[0] + "."
      break
    }
    previous_letter = string[0]
  }
  return string
}

// Program 5

function truncate(string, characterAmount) {
  dotCount = 3
  for (let i = characterAmount; i < string.length; i++) {
    while (dotCount > 0) {
      string[i] = "."
      dotCount--
    }
    string[i] = ""
  }
  return string
}

// Program 6

function endOfG(string) {
  myArray = string.slice("g", 2)
  return myArray[1]
}