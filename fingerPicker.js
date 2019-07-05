// Code Organization
// I would suggest making a `main.js` file that both configures your app and reveals the command line methods you want to use
// You may want to look at some command line npm apps to better configure this app
// There should be at least one TabGenerator class (though you may end up with more) that stores these methods, and holds state


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
// this should ideally be a function that takes in a number of strings as an argument
// measureLength should be its own private method
// line 8 might be able to be made into a small method

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
          tablature[index].push("-=-")
        }
      } else {
        tablature[index].push("---")
      }
    })
  })
  return tablature
}
// you might consider adding a random number generator library that doesnt return a number between 0 and 1, or making your own custom random number generator
let logTablature = (tablatureArray) => {
  tablatureArray.forEach(stringPattern => {
    console.log(stringPattern.join("") + "|" + stringPattern.join("") +"|")
  })
}

let standardGuitar = (measureLength = Math.floor(Math.random() * 6) + 3) => {
  logTablature(writeTablatureArray(3, measureLength))
  logTablature(writeTablatureArray(3,measureLength))
}

let ukulele = (measureLength = Math.floor(Math.random() * 6) + 3) => {
  logTablature(writeTablatureArray(1, measureLength))
  logTablature(writeTablatureArray(1, measureLength))
  logTablature(writeTablatureArray(2, measureLength))
}
// is there a way we could make one DRY method, that takes in parameters such that it can run for both guitar or uke?



module.exports = {
  standardGuitar,
  ukulele
}
