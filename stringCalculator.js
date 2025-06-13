class StringCalculator {
  add(numbers) {
    if (numbers === "") {
      return 0;
    }
    // return parseInt(numbers, 10); // Convert string to integer
    const numberArray = numbers.split(",").map((num) => parseInt(num, 10));
    console.log(numberArray, "numberArray");

    return numberArray.reduce((sum, num) => sum + num, 0);
  }
}

module.exports = StringCalculator;
