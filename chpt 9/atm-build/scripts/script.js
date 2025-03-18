class User {
  constructor(firstName, lastName, email, password, balance = 0.0) {
    this.firstName = firstName
    this.lastName = lastName
    this.email = email
    this.password = password
    this.balance = balance
    this.transactions = []
  }

  addTransaction(type, amount) {
    this.transactions.push({type, amount})
    updateTransactionHistory(type, amount)
  }
}

const users = [
  new User("Jake", "Egbert", "j.com", "1234", 10000),
  new User("Tytan", "Telford", "t.com", "1234"),
  new User("Leland", "Lobato", "l.com", "1234"),
  new User("Aidan", "Jex", "a.com", "1234"),
  new User("Enoka", "Enoka", "e.com", "1234", 10)
]

let loggedInUser = null


function toggleVisibility(elementID, shouldShow) {
  document.getElementById(elementID).classList.toggle("hidden", !shouldShow)
}

function updateTextContent(elementID, text) {
  document.getElementById(elementID).textContent = text
}

function completeTransaction(type) {
  const amount = parseFloat(document.getElementById(`${type}-amount`).value)
  const errorId = `${type}-error`
  const errorCondition = 
    isNaN(amount) || 
    amount <= 0 || 
    (type == "withdraw" && amount > loggedInUser.balance)
  if (errorCondition) {
    toggleVisibility(errorId, true)
  }
  else {
    loggedInUser.balance += type === "deposit" ? amount : -amount
    loggedInUser.addTransaction(type === "deposit" ? "deposit" : "withdraw", amount)
    showBalance()
    toggleVisibility(`${type}-section`, false)
  }
}

function showBalance() {
  if (loggedInUser) {
    updateTextContent("balance-display", `Your balance is $${loggedInUser.balance.toFixed(2)}`)
  }
}

function toggleTransaction(type) {
  toggleVisibility("deposit-section", type == "deposit")
  toggleVisibility("withdraw-section", type == "withdraw")
}

function updateTransactionHistory(type, amount) {
  const transactionList = document.getElementById("transaction-list")
  const transactionItem = document.createElement("li")

  transactionItem.classList.add(type == "deposit" ? "deposit" : "withdraw")
  transactionItem.textContent = `${type}: $${amount.toFixed(2)}`
  transactionList.appendChild(transactionItem)
}

function login() {
  const email = document.getElementById("email").value
  const password = document.getElementById("password").value

  const user = users.find((user) => user.email === email && user.password === password)

  if (user) {
    loggedInUser = user
    toggleVisibility("login-section", false)
    toggleVisibility("atm-menu", true)
    toggleVisibility("transaction-history", true)
    showBalance()
  }
  else {
    toggleVisibility("login-error", true)
  }
}

function logout() {
  ["atm-menu", "transaction-history"].forEach((id) => {
    toggleVisibility(id, false)
  })
  document.getElementById("transaction-list").innerHTML = ""
  document.getElementById("email").value = ""
  document.getElementById("password").value = ""
  loggedInUser = null
  toggleVisibility("login-section", true)
}