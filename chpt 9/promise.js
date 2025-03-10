const myPromise2 = () => {
  return new Promise((resolve, reject) => {
    let allowed = true
    if (allowed === true) {
      resolve('Success')
    } else {
      reject('Failed')
    }
  })
}

console.log(myPromise2)
console.log(myPromise2())