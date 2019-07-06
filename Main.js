const TablatureGenerator =  require('./TablatureGenerator.js')

let guitar = {
    name: "guitar",
    dependentStringSetsArray: [3, 3]
}

let ukelele = {
  name: "ukelele",
  dependentStringSetsArray: [1, 1, 2]
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
  logUkeleleTabs
}
