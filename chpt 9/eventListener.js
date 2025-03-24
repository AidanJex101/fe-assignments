function randomHex(amountOfPlaces) {
  let hexValues = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]
  let newHex = ""
  for (let i = 0; i < amountOfPlaces; i++) {
    let randomNum = Math.floor(Math.random() * 15)
    newHex += hexValues[randomNum]
  }
  return newHex
}

console.log(randomHex(4))


let header = document.querySelector("h2")
let headerInput = document.getElementById("headerInput")
let deleteButton = document.getElementById("reset")
let backButton = document.getElementById("backspace")
let errorText = document.querySelector("p")

headerInput.addEventListener("input", () => {
  if (headerInput.value.length > 50) {
    headerInput.disabled = true
    errorText.innerText = "You header cannot exeed 50 characters!"
  }
  else {
    headerInput.disabled = false
    header.innerText = headerInput.value
  }
  
})

deleteButton.addEventListener("click", () => {
  headerInput.disabled = false
  errorText.innerText = ""
  header.textContent = ''
  headerInput.value = ""
})

backButton.addEventListener("click", () => {
  headerTextArray = headerInput.value.slice(0, headerInput.value.length - 1)
  headerInput.value = headerTextArray
  headerInput.disabled = false
  header.innerText = headerTextArray
  errorText.textContent = ""
})