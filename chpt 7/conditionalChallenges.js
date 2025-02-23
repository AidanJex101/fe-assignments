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
}

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
  for (letter in string) {
    if (previous_letter = " ") {
      letter.toUpperCase()
    }
    previous_letter = letter
  }
  return string
}

// Challenge 4

function alphabeticalString(string) {
  
}