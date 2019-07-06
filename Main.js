const TablatureGenerator =  require('./TablatureGenerator.js')

let guitar = {
    name: "guitar",
    dependentStringSetsArray: [3, 3]
}

let ukelele = {
  name: "ukelele",
  dependentStringSetsArray: [1, 1, 2]
}

let jazzGuitar = {
  name: "jazz guitar",
  dependentStringSetsArray: [1, 1, 1, 1]
}

let lowJazzChordEmptyStringConfig = [1, 5]
let highJazzChordEmptyStringConfig = [4, 6]
let jazzChordRandomConfig = Math.random()

if (jazzChordRandomConfig >= 0.5) {
  jazzGuitar.emptyStringsArray = lowJazzChordEmptyStringConfig
} else {
  jazzGuitar.emptyStringsArray = highJazzChordEmptyStringConfig
}
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
