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
  delete_me : true,

  toString() {
    return "Person " + this.id + "'s name is " + this.name + ". They are " + this.age + " years old and were born " + this.dob + ". They have been through " + this.grades_completed[this.grades_completed.length - 1] + " grade. They also have a friend named " + this.friend.name 
  }
}

console.log(myObject.toString())

for (property in myObject) {
  console.log(myObject[property])
}

delete myObject["delete_me"]

for (property in myObject) {
  console.log(myObject[property])
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


user.semesters["semester_two"] = "complete"

delete user.semesters.semester_four

user["favorite_language"] = "Javascript"

for (property in user) {
  console.log(user[property])
}

// Challenge 3

myArrayObj = {
  array : [1, 2, 3, 4, 5],
  removeFirstValue() {
    console.log(this.array.shift())
    console.log(this.array)
  },
  removeLastValue() {
    console.log(this.array.pop())
    console.log(this.array)
  }
}

myArrayObj.removeFirstValue()
myArrayObj.removeLastValue()


