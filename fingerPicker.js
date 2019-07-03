let measureCount = Math.floor(Math.random() * 6) + 3
let sequence = []
let counter = 0

while (counter < measureCount) {
  let string = Math.floor(Math.random() * 6) + 1
  sequence.push(string)
  counter += 1
}

let e = []
let B = []
let G = []
let D = []
let A = []
let E = []

let measure = [e, B, G, D, A, E]

sequence.forEach((stringNumber) => {
  measure.forEach((string, index) => {
    if (stringNumber - 1 === index) {
      measure[index].push("-0-")
    } else {
      measure[index].push("---")
    }
  })
})

measure.forEach((stringPattern) => {
    console.log(stringPattern.join("") + stringPattern.join(""))
})
