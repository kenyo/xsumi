// Write a function oddCaps that takes one argument: str. If str is not of type string, return undefined, otherwise return a new string with the same letters as str, but with every odd letter capitalized.

function oddCaps(str) {
  if (typeof str !== 'string') return undefined
  else {
    // turn string into array
    var arr = str.split('')

    var upperArray = arr.map((letter, i) => {
      if (i % 2 == 1) return letter.toUpperCase()
      else return letter
    })

    return upperArray.join('')


  }
}

console.log(oddCaps('hahahahaha'))
