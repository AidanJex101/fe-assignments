let JSONObject = [
  {id: 0, name: "Aidan", email: "aidan.coffey.jex@gmail.com", password: "Telepathy2005"},
  {id: 1, name: "Jake", email: "jake@devpipline.com", password: "Icantremembermypassword1234"},
  {id: 2, name: "Flippy", email: "flippyflipsburger@gmail.com", password: "iknowjakespassword2004"}
]

function outputUser(userId) {
  user = JSONObject[userId]
  message = "Hello, " + user.name + " your email is " + user.email
  console.log(message)
}

outputUser(2)

let promiseFunction = () => {

  return new Promise((resolve, reject) => {

    const requestObject = new XMLHttpRequest();

    requestObject.open('GET', 'https://www.swapi.tech/api/planets')
    requestObject.responseType='json'
    requestObject.send()

    requestObject.onload = () => {

      if (requestObject.status == 200) {
        resolve(requestObject.response)
      }

      else {
        reject("Promise Failed")
      }

    }

  })
  
}

promiseFunction()
  .then(
    (object) => {
      console.log(object.results)
      return object.results
    }
  )
  .then(
    (results) => {
      console.log(results[0])
    }
  )
  .catch(
    () => {
      console.error("Promise Failed")
    })

