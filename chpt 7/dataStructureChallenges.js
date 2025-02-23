// Challenge 1

myObject = {
  id : 0,
  name : "Aidan",
  age : 20,
  dob : "10/29/2004",
  grades_completed : ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th", "11th", "12th"],
  friend : {
    id : 1,
    name : "Jeff",
    age : 19,
    dob : "11/21/2005",
    grades_completed : ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th", "11th"],
  },
  delete_me : true
}

// Challenge 2

user = {
  first_name : "Aidan",
  last_name : "Jex",
  city : "Millcreek",
  semesters : {
    semester_one : "incomplete",
    semester_two : "incomplete",
    semester_three : "incomplete",
    semester_four : "incomplete"
  }
}


user.semesters[semester_number] = "complete"

delete user.semesters.semester_four

user["favorite_language"] = "Javascript"

// Challenge 3

function removeFirstValue(array) {
  array.shift()
  return array
}

function removeLastValue(array) {
  array.pop()
  return array
}