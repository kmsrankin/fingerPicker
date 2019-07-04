let pluckedStringNumbersArray = (
  numberOfStrings = 6,
  measureLength = Math.floor(Math.random() * 6) + 3
) => {
  let sequence = []
  let counter = 0
  while (counter < measureLength) {
    let string = Math.floor(Math.random() * numberOfStrings) + 1
    sequence.push(string)
    counter += 1
  }
  return sequence
}

let arrayOfStringPatternArrays = (numberOfStrings = 6) => {
  let stringCounter = 0
  let stringsArray = []
  while (stringCounter < numberOfStrings) {
    stringsArray.push([])
    stringCounter += 1
  }
  return stringsArray
}

let writeTablatureArray = (
  numberOfStrings = 6,
  measureLength = Math.floor(Math.random() * 6) + 3
) => {
  let tablature = arrayOfStringPatternArrays(numberOfStrings)
  let randomlyPluckedStringsArray = pluckedStringNumbersArray(numberOfStrings, measureLength)
  randomlyPluckedStringsArray.forEach((stringNumber) => {
    tablature.forEach((string, index) => {
      if (stringNumber - 1 === index) {
        if (Math.random() >= 0.5) {
          tablature[index].push("-0-")
        } else {
          tablature[index].push("-}-")
        }
      } else {
        tablature[index].push("---")
      }
    })
  })
  return tablature
}

let logTablature = (tablatureArray) => {
  tablatureArray.forEach(stringPattern => {
    console.log(stringPattern.join("") + "|" + stringPattern.join("") +"|")
  })
}

let measureLength = Math.floor(Math.random() * 6) + 3
logTablature(writeTablatureArray(3, measureLength))
logTablature(writeTablatureArray(3,measureLength))
