// const NewTablatureGenerator = require("./NewTablatureGenerator")
const Instrument = require('./Instrument.js')



let empty2DTablatureObject = () => {
  let tablature = {}
  let stringArray = ["E", "A", "D"]
  stringArray.forEach(stringName => {
    tablature[stringName] = ""
  })
  return tablature
}

console.log(empty2DTablatureObject())
