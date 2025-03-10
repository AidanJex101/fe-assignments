
function createWheel(wheelOptions) {
  let randomNumber = Math.floor(Math.random() * wheelOptions.length)
  let wheel

  if (randomNumber == 0) {
    wheel = [9, 1, 2]
  }
  else if (randomNumber == 8) {
    wheel = [8, 9, 1]
  }
  else {
    wheel = wheelOptions.slice(randomNumber - 1, randomNumber + 2)
  }

  return wheel

}

function createWheelString(wheels) {

  let wheelString = ""

  for (let i = 0; i < 3; i++) {

    if (i == 1) {
      wheelString += "[ "
    }
    else {
      wheelString += "  "
    }

    for (wheel of wheels) {

      wheelString += wheel[i] + " "

    }

    if (i != 1) {
      wheelString += "\n\n"
    }
    else {
      wheelString += "] <--\n\n"
    }

  }

  return wheelString
}

let wheelOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9]

wheels = [createWheel(wheelOptions), createWheel(wheelOptions), createWheel(wheelOptions)]

console.log(createWheelString(wheels))