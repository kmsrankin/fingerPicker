const SequenceGenerator = require('./SequenceGenerator.js')
const Instrument = require('./Instrument.js')
const RandomNumberGenerator = require('./RandomNumberGenerator')

class NewTablatureGenerator {
  constructor(instrumentConfig) {
    this.instrumentConfig = instrumentConfig
  }

  randomMeasureLength(){
    let randomLengthGenerator = new RandomNumberGenerator(3, 16)
    return randomLengthGenerator.generate()
  }

  emptyTablatureObject(){
    let tablature = {}
    this.instrumentConfig.orderedStringNames.forEach(stringName => {
      tablature[stringName] = `${stringName} |`
    })
    return tablature
  }

  buildTablature(measureLength) {
    let tablature = this.emptyTablatureObject()
    let sets = this.instrumentConfig.stringSets
    console.log(sets)
    sets.forEach(setOfStrings => {
      let counter = 0
      let sequenceGenerator = new SequenceGenerator(setOfStrings.strings)
      let setSequence = sequenceGenerator.newSequence(measureLength)
      setSequence.forEach(stringAssignment => {
        counter += 1
        setOfStrings.strings.forEach(string => {
          console.log(counter)
          if (setOfStrings.rhythm.includes(counter)) {
            if (string === stringAssignment) {
              if (Math.random() >= 0.5){
                tablature[string] += "-0-"
              } else {
                tablature[string] += "-=-"
              }
            } else {
              tablature[string] += "---"
            }
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
    return Object.values(this.buildTablature(measure)).map(string => {
      return string += "|"
    }).join("\n")
  }
}

let guitar = new Instrument(
  "guitar",
  ["e", "B", "G", "D", "A", "E"],
  [
    {
      strings: ["E", "A", "D"],
      rhythm: [1, 3, 5, 7, 9, 11, 13, 15]
    },
    {
      strings: ["G", "B", "e"],
      rhythm: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
    }
  ]
)
let guitarTabs = new NewTablatureGenerator(guitar)
console.log(guitarTabs.generate(8))

module.exports = NewTablatureGenerator
