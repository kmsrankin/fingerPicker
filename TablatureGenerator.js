const SequenceGenerator = require('./SequenceGenerator.js')
const Instrument = require('./Instrument.js')
const RandomNumberGenerator = require('./RandomNumberGenerator')

class TablatureGenerator {
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
    sets.forEach(setOfStrings => {
      let counter = 0
      let sequenceGenerator = new SequenceGenerator(setOfStrings.strings)
      let setSequence = sequenceGenerator.newSequence(measureLength)
      setSequence.forEach(stringAssignment => {
        counter += 1
        setOfStrings.strings.forEach(string => {
          if (setOfStrings.rhythm.includes(counter)) {
            if (string === stringAssignment) {
              if (Math.random() >= setOfStrings.restChance){
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



module.exports = TablatureGenerator
