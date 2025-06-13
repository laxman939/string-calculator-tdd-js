class StringCalculator {
  add(numbers) {
    if (numbers === "") {
      return 0;
    }
    return parseInt(numbers, 10); // Convert string to integer
  }
}

module.exports = StringCalculator;
