class Instrument {
  constructor(name, arrOfStringSetCounts, arrOfEmptyStrings = null) {
    this.name = name;
    this.arrOfStringSetCounts = arrOfStringSetCounts
    this.arrOfEmptyStrings = arrOfEmptyStrings
  }
}

module.exports = Instrument
