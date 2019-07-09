class RandomNumberGenerator {
  constructor(min, max) {
    this.minimum = min
    this.maximum = max
  }

  generate() {
    let range = this.maximum - this.minimum
    return Math.floor(Math.random() * (range + 1)) + this.minimum
  }
}

module.exports = RandomNumberGenerator
