const SequenceGenerator = require('./SequenceGenerator.js')
const Instrument = require('./Instrument.js')

class NewTablatureGenerator {
  constructor(instrumentConfig) {
    this.instrumentConfig = instrumentConfig
  }

  randomMeasureLength(){
    let randomLengthGenerator = new RandomNumberGenerator
    return randomLengthGenerator.generate(3, 16)
  }

  emptyTablatureObject(){
    let tablature = {}
    this.instrumentConfig.orderedStringNames.forEach(stringName => {
      tablature[stringName] = ""
    })
    console.log(tablature)
    return tablature
  }

  buildTablature(measureLength) {
    let tablature = this.emptyTablatureObject()
    this.instrumentConfig.stringSets.forEach(set => {
      let sequenceGenerator = new SequenceGenerator(set)
      let setSequence = sequenceGenerator.newSequence(measureLength)
      // console.log(setSequence)
      // console.log(set)
      // console.log(Object.keys(set))
      setSequence.forEach(stringAssignment => {
        set.forEach(string => {
          if (string === stringAssignment) {
            // console.log(tablature[string])
            tablature[string] += "-0-"
          } else {
            tablature[string] += "---"
          }
        })
      })
    })
    return tablature
  }

  generate(measureLength = null) {
    let measure = measureLength
    if (measureLength === null) {
      measure = this.randomMeasureLength()
    }
    return Object.values(this.buildTablature(measure)).join("\n")
  }
}

let guitar = new Instrument("guitar", ["e", "B", "G", "D", "A", "E"], [["E", "A", "D"], ["G", "B", "e"]])
let guitarTabs = new NewTablatureGenerator(guitar)
console.log(guitar)
console.log(guitarTabs.generate(16))

module.exports = NewTablatureGenerator
