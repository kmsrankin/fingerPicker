class TablatureGenerator {
  constructor(instrument) {
    this.instrument = instrument;
  }

  randomMeasureLength() {
    return Math.floor(Math.random() * 14) + 3
  }

  arrOfRandStringNumbers(numberOfControlledStrings, measureLength) {
    let sequence = []
    let counter = 0
    while (counter < measureLength) {
      let pluckedStringNumber = Math.floor(Math.random() * numberOfControlledStrings) + 1
      sequence.push(pluckedStringNumber)
      counter += 1
    }
    return sequence
  }

  empty2DTablatureArr(numberOfControlledStrings) {
    let stringCounter = 0
    let stringsArray = []
    while (stringCounter < numberOfControlledStrings) {
      stringsArray.push([])
      stringCounter += 1
    }
    return stringsArray
  }

  fill2DTablatureArr(numberOfControlledStrings, measureLength){
    let tablatureArray = this.empty2DTablatureArr(numberOfControlledStrings)
    let randomlyPluckedStringsArray = this.arrOfRandStringNumbers(numberOfControlledStrings, measureLength)
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

  build2DArrOfActiveStringTabs(measureLength) {
    let tablatureArray = []
    this.instrument.arrOfStringSetCounts.forEach(stringSetCount => {
      tablatureArray = tablatureArray
      .concat(this.fill2DTablatureArr(stringSetCount, measureLength))
    })
    return tablatureArray
  }

  spliceEmptyTabLines(tablatureArray, measureLength) {
    let emptyStringArray = []
    let counter = 0
    while (counter < measureLength) {
      emptyStringArray.push("---")
      counter += 1
    }
    this.instrument.stdEmptyTabLines.forEach(string => {
      let stringIndex = string - 1
      tablatureArray.splice(stringIndex, 0, emptyStringArray)
    })
    return tablatureArray
  }

  stringifyTablature(tablatureArray) {
    let partialTablatureString = ''
    tablatureArray.forEach(stringPattern => {
      partialTablatureString += stringPattern.join("") + "|" + stringPattern.join("") + "|\n"
    })
    return partialTablatureString
  }

  generate(measureLength = this.randomMeasureLength()) {
    let completeStringsArray = this.build2DArrOfActiveStringTabs(measureLength)
    if (this.instrument.stdEmptyTabLines){
      completeStringsArray = this.spliceEmptyTabLines(completeStringsArray, measureLength)
    }
    let completeTablatureString = this.stringifyTablature(completeStringsArray)
    return completeTablatureString
  }
}

module.exports = TablatureGenerator
