class StringCalculator {
  add(numbers) {
    if (numbers === "") {
      return 0;
    }
    let delimiter = ",";
    let numberString = numbers;

    // Check for custom delimiter
    if (numbers.startsWith("//")) {
      const delimiterEndIndex = numbers.indexOf("\n");
      delimiter = numbers.substring(2, delimiterEndIndex);
      numberString = numbers.substring(delimiterEndIndex + 1);
    }

    // Replace newlines with the delimiter
    numberString = numberString.replace(/\n/g, delimiter);

    const numberArray = numberString
      .split(delimiter)
      .map((num) => parseInt(num, 10));
    return numberArray.reduce((sum, num) => sum + num, 0);
  }
}

module.exports = StringCalculator;
