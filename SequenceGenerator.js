const RandomNumberGenerator = require('./RandomNumberGenerator.js')

class SequenceGenerator {
  constructor(arrOfStringNames){
    this.arrOfStringNames = arrOfStringNames
  }

  newSequence (measureLength) {
    let counter = 0
    let completeSequence = []
    let noteAssigner = new RandomNumberGenerator(0, this.arrOfStringNames.length - 1)
    while (counter < measureLength) {
      let randomIndex = noteAssigner.generate()
      let nextStringName = this.arrOfStringNames[randomIndex]
      // console.log(nextStringName)
      completeSequence.push(nextStringName)
      counter += 1
    }
    // console.log(completeSequence)
    return completeSequence
  }
}

module.exports = SequenceGenerator
