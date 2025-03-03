class ArrayManager {

  constructor(array) {
    this.array = array
    this.originalLength = array.length
  }

  removeFirstValue() {
    console.log(this.array.shift())
    console.log(this.array)
  }

  removeLastValue() {
    console.log(this.array.pop())
    console.log(this.array)
  }

  alternatingSplice() {
    for (let i = 0; i < this.originalLength; i++) {
      if (i % 2 == 0) {
        this.removeFirstValue()
      }
      else {
        this.removeLastValue()
      }
    }
    console.log("Alternating splice complete, array is now empty")
  }

}

arrayManager = new ArrayManager([1, 2, 3, 4, 5])
arrayManager.alternatingSplice()