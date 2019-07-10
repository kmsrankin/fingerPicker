const NewTablatureGenerator =  require('./NewTablatureGenerator.js')
const Instrument = require('./Instrument.js')

let guitar = new Instrument("guitar", [3, 3])

let ukelele = new Instrument("ukelele", [1, 1, 2])

let arrOfEmptyStrings
let lowJazzChordEmptyStringConfig = [1, 5]
let highJazzChordEmptyStringConfig = [4, 6]
let jazzChordRandomConfig = Math.random()
if (jazzChordRandomConfig >= 0.5) {
  arrOfEmptyStrings = lowJazzChordEmptyStringConfig
} else {
  arrOfEmptyStrings = highJazzChordEmptyStringConfig
}

let jazzGuitar = new Instrument("jazz guitar", [3, 1], arrOfEmptyStrings)

let logJazzGuitarTabs = (measureLength) => {
  let generator = new TablatureGenerator(jazzGuitar)
  console.log(generator.generate(measureLength))
}

let logGuitarTabs = (measureLength) => {
  let generator = new TablatureGenerator(guitar)
  console.log(generator.generate(measureLength))
}

let logUkeleleTabs = (measureLength) => {
  let generator = new TablatureGenerator(ukelele)
  console.log(generator.generate(measureLength))
}

module.exports = {
  logGuitarTabs,
  logUkeleleTabs,
  logJazzGuitarTabs
}
