let keys = document.querySelectorAll('.key')
let squares = document.querySelectorAll('.square span')
let current_letters = []
let delete_key = document.getElementById('delete')
let enter_key = document.getElementById('enter')
let the_word = 'place'
let CheckTimer 
let user_Start_Index = 0
let user_Current_Index = user_Start_Index

enter_key.addEventListener('click', enterFunction)
delete_key.addEventListener('click', deleteFunction)

CheckTimer = setInterval(checkCurrentLetter, 50)

for (i=0; i < keys.length; i++) {
  let key = keys[i]
  key.addEventListener('click', addLetter)
}



function enterFunction() {
  user_Current_Index += 1
  current_letters = []
}

function deleteFunction() {
  current_letters.pop()
  if (user_Current_Index != 0 || user_Current_Index != 6 || user_Current_Index != 12 || user_Current_Index != 18 || user_Current_Index != 24 || user_Current_Index != 30) {
    squares[user_Current_Index].innerText = ''
    user_Current_Index = user_Current_Index - 1
  }
}

function addLetter() {
  if (user_Current_Index != 6 || user_Current_Index != 12 || user_Current_Index != 18 || user_Current_Index != 24 || user_Current_Index != 30 || user_Current_Index != 36) {
    user_Current_Index += 1
    let letter = this.innerText
    current_letters.push(letter)
    squares[user_Current_Index].innerText = letter
  }
}
  



function checkCurrentLetter() {

  if (user_Current_Index == 0 || user_Current_Index == 6 || user_Current_Index == 12 || user_Current_Index == 18 || user_Current_Index == 24 || user_Current_Index == 30) {
    delete_key.removeEventListener('click', deleteFunction)
    for (i=0; i < keys.length; i++) {}

  }
  else {
    delete_key.addEventListener('click', deleteFunction)
  }

  if (user_Current_Index == 5 || user_Current_Index == 11 || user_Current_Index == 17 || user_Current_Index == 23 || user_Current_Index == 29 || user_Current_Index == 35) {
    enter_key.addEventListener('click', enterFunction)
  }
  else {
    enter_key.removeEventListener('click', enterFunction)
  }

  if
}
