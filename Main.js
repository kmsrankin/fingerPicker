const TablatureGenerator =  require('./TablatureGenerator.js')
const Instrument = require('./Instrument.js')
let allEighths = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
let allQuarters = [1, 3, 5, 7, 9, 11, 13, 15]
let guitar = new Instrument(
  "guitar",
  ["e", "B", "G", "D", "A", "E"],
  [
    {
      strings: ["E", "A", "D"],
      rhythm: allQuarters,
      restChance: .50
    },
    {
      strings: ["G", "B", "e"],
      rhythm: allEighths,
      restChance: .50
    }
  ]
)

let ukelele = new Instrument(
  "ukelele",
  ["A", "E", "C", "g"],
  [
    {
      strings: ["g", "C"],
      rhythm: allQuarters,
      restChance: .50
    },
    {
      strings: ["E", "A"],
      rhythm: allEighths,
      restChance: .50
    }
  ]
)

let logTabs = (instrument, measureLength) => {
  if (instrument === "guitar"){
    instrument = guitar
  } else if (instrument === "ukelele"){
    instrument = ukelele
  }

  let tabs = new TablatureGenerator(instrument)
  console.log(tabs.generate(measureLength))
}

module.exports = {
  logTabs
}
