function dynamicHeading(headingSize, headingText) {
  if (headingSize > 6) {
    return "Heading size exeeds limit of 6"
  }
  else if (headingSize < 1) {
    return "Your heading size must be between 1 and 6"
  }
  else {
    headingElement = document.createElement("h" + headingSize)
    headingElement.innerText = headingText
    return headingElement
  }
}

function renderElement(childElement, parentElement) {
  parentElement.appendChild(childElement)
}


hamburgerMenuImg = document.querySelector(".hamburger img")

hamburgerMenuImg.addEventListener(("click"), dynamicHeader)
isOpen = false
hamburgerLinks = document.querySelectorAll(".hamburgerMenu .link")


function dynamicHeader() {
  
  isOpen = !isOpen
  hamburgerMenuImg.style.transform += "rotate(360deg)"
  if (isOpen) {
    hamburgerLinks.forEach((link) => {
      link.style.display = "inline-block"
      link.style.transform = "scale(100%)"
    })
  }
  else {
    hamburgerLinks.forEach((link) => {
      link.style.display = "none"
      link.style.transform = "scale(0%)"
      link.style.transition = "all 500ms"
    })
  }

}
  
