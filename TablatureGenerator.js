class TablatureGenerator {
  constructor(instrument) {
    this.instrument = instrument;
  }

  pluckedStringNumbersArray(numberOfControlledStrings, measureLength) {
    let sequence = []
    let counter = 0
    while (counter < measureLength) {
      let pluckedStringNumber = Math.floor(Math.random() * numberOfControlledStrings) + 1
      sequence.push(pluckedStringNumber)
      counter += 1
    }
    return sequence
  }

  arrayOfStringPatternArrays(numberOfControlledStrings) {
    let stringCounter = 0
    let stringsArray = []
    while (stringCounter < numberOfControlledStrings) {
      stringsArray.push([])
      stringCounter += 1
    }
    return stringsArray
  }

  writeTablatureArray(numberOfControlledStrings, measureLength){
    let tablatureArray = this.arrayOfStringPatternArrays(numberOfControlledStrings)
    let randomlyPluckedStringsArray = this.pluckedStringNumbersArray(numberOfControlledStrings, measureLength)
    randomlyPluckedStringsArray.forEach((pluckedStringNumber) => {
      tablatureArray.forEach((string, index) => {
        if (pluckedStringNumber - 1 === index) {
          if (Math.random() >= 0.5) {
            tablatureArray[index].push("-0-")
          } else {
            tablatureArray[index].push("-=-")
          }
        } else {
          tablatureArray[index].push("---")
        }
      })
    })
    return tablatureArray
  }

  stringifyTablatureChunk(tablatureArray) {
    let partialTablatureString = ''
    tablatureArray.forEach(stringPattern => {
      partialTablatureString += stringPattern.join("") + "|" + stringPattern.join("") + "|\n"
    })
    return partialTablatureString
  }

  randomNumberGenerator() {
    return Math.floor(Math.random() * 14) + 3
  }

  generate(measureLength = this.randomNumberGenerator()) {
    let completeTablatureString = ''
    this.instrument.dependentStringSetsArray.forEach(stringSetCount => {
      completeTablatureString += this.stringifyTablatureChunk(this.writeTablatureArray(stringSetCount, measureLength))
    })
    return completeTablatureString
  }
}

module.exports = TablatureGenerator
