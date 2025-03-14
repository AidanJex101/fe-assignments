class LinkList {
  constructor() {
    this.list = []
  }

  first() {
    return this.list[0]
  }

  last() {
    return this.list[this.list.length - 1]
  }

  pop() {
    lastItem = this.list[this.list.length - 1]
    this.list[this.list.length - 1].pop()
    return lastItem
  }

  clear() {
    this.list = []
    return "List successfully cleared"
  }

}

class Node {
  constructor(

  {
    id,
    className,
    tag,
    pointsTo,
  }) 

  {
    this.id = id
    this.className = className
    this.pointsTo = pointsTo
    this.tag = tag
  }

  getNode() {
    if (this.id) {
      return document.getElementById("'" + id + "'")
    }
    else if (this.className) {
      return document.querySelector("'" + this.className + "'")
    }
    else if (this.tag) {
      return document.querySelector("'" + this.tag + "'")
    }
    else {
      return "Error: node is undefined"
    }
  }

}

function grabAllElementsOnPage() {

  elements = document.querySelectorAll("html")

  for (let i = 0; i < elements.length; i++) {
    console.log(elements[i].localName)
  }

}

grabAllElementsOnPage()