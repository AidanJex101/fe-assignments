// Challenge 1

obj1 = {
  id: 1,
  name: "Aidan"
}





obj2 = {
  address: "123 fake st",
  phone: "555-555-5555"
}



function combineObjects(obj1, obj2) {
  obj1_Keys = Object.keys(obj1)
  obj2_Keys = Object.keys(obj2)
  obj1_Values = Object.values(obj1)
  obj2_Values = Object.values(obj2)

  obj3 = {}

  for (let i = 0; i < obj1_Keys.length; i++) {
    obj3[obj1_Keys[i]] = obj1_Values[i]
  }
  for (let i = 0; i < obj2_Keys.length; i++) {
    obj3[obj2_Keys[i]] = obj2_Values[i]
  }

  return obj3
}

obj3 = combineObjects(obj1, obj2)



// Challenge 2

function largestNum(num1, num2) {
  if ((num1 > num2) ? true : false) {
    return num1
  }
  else {
    return num2
  }
}

// Challenge 3

function titleCaseString(string) {
  previous_letter = ""
  newString = ""

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

// Challenge 4

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



// Testing

for (property in obj1) {
  console.log("\nObject 1\n")
  console.log(obj1[property])
}

console.log("\nObject 2\n")
for (property in obj2) {
  console.log(obj2[property])
}

console.log("\nObject 3\n")
for (property in obj3) {
  console.log(obj3[property])
}

console.log("\nFunctions\n")

console.log(largestNum(9,12))

console.log(titleCaseString("I am a sentence"))

console.log(alphabeticalString("Hi there"))