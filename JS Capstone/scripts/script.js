




let myPromise = new Promise(function(myResolve, myReject) {
  XMLObject = new XMLHttpRequest()
  XMLObject.onreadystatechange = function () {
    let results
    if (this.readyState == 4 && this.status == 200) {
      results = JSON.parse(XMLObject.responseText).results
      if (results) {
        myResolve(results)
      }
      else {
        myReject("Failed to load students")
      }
    }
  }
  XMLObject.open("GET", "https://fe-students.onrender.com/api/users")
  XMLObject.send()  
})


myPromise.then(
    function(value) {

      let students = value
      let sideBar = document.querySelector(".side-bar")
      students.forEach((student) => {
        let studentDiv = document.createElement("div")
        studentDiv.classList.add("student")

        let studentNameH3 = document.createElement("h3")
        studentNameH3.innerText = student["name"]
        
        let weightContainerHTML = '<div class="weight-container"> <button class="green">+</button> <div class="weight-number">1</div> <button class="red">-</button></div>'

        studentDiv.appendChild(studentNameH3)
        studentDiv.innerHTML += weightContainerHTML
        sideBar.appendChild(studentDiv)
      })

      let addStudentWeightButtons = document.querySelectorAll(".student .weight-container .green")
      let subtractStudentWeightButtons = document.querySelectorAll(".student .weight-container .red")




      addStudentWeightButtons.forEach((button) => {
        button.addEventListener("click", () => {
          
          weightDiv = button.nextSibling.nextSibling

          currentWeight = parseInt(weightDiv.innerText)

          if (currentWeight < 99) {
            currentWeight += 1
            weightDiv.innerText = currentWeight
          }
        })
      })


      subtractStudentWeightButtons.forEach((button) => {
        button.addEventListener("click", () => {
          
          weightDiv = button.previousSibling.previousSibling

          currentWeight = parseInt(weightDiv.innerText)

          if (currentWeight > 1) {
            currentWeight -= 1
            weightDiv.innerText = currentWeight
          }
          
          
        })
      })

      let studentDivs = document.querySelectorAll(".student")
      let studentArray = []
      let pickStudentButton = document.querySelector(".randomizer-container button")
      let pickStudentText = document.querySelector(".randomizer-container h2")

      pickStudentButton.addEventListener("click", () => {
        studentArray = []
        studentDivs.forEach((div) => {
          weightAmount = div.childNodes[1].childNodes[3].innerText
          studentName = div.childNodes[0].innerText
          for (let i = 0; i < weightAmount; i++) {
            studentArray.push(studentName)
          }
        })
        randomNum = Math.floor(Math.random() * studentArray.length)
        pickStudentText.innerText = studentArray[randomNum] + " has been chosen!"
      })
    }
  )

myPromise.catch(
  function (value) {
    let pickStudentText = document.querySelector(".randomizer-container h2")
    pickStudentText = value
  }
)