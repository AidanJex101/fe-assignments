// Key is AI choice, Value is array beginning with the win value and the second is the loss value

const aiChoices = ["r", "p", "s"]

const winLoseObject = {
  "r": ["s", "p"], 
  "p": ["r", "s"], 
  "s": ["p", "r"]
}

const letterToWord = {
  "r": "Rock",
  "p": "Paper",
  "s": "Scissors"
}

while (true) {
  let randomNum = Math.floor(Math.random() * 3)

  let aiChoice = aiChoices[randomNum]

  let userOption = prompt("(R) Rock, (P) Paper, or (S) Scissors?")

  let winLoseArray = winLoseObject[aiChoice]

  userOption = userOption.toLowerCase()

  console.log("AI Chose " + letterToWord[aiChoice])
  console.log("You Chose " + letterToWord[userOption])

  if (userOption == winLoseArray[1]) {
    
    console.log("You win")
  }
  else if (userOption == winLoseArray[0]) {
    console.log("You lose")
  }
  else {
    console.log("Draw!")
  }

  let playAgain = prompt("Play again? (Y) Yes or (N) No?")
  playAgain = playAgain.toLowerCase()
  
  if (playAgain != "y") {
    break
  }
}

