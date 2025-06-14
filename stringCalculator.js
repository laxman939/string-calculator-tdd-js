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
    console.log("numberString", numberString);

    // Split and validate each part
    const parts = numberString.split(delimiter);
    console.log("parts", parts);

    const numberArray = [];

    for (let i = 0; i < parts.length; i++) {
      const part = parts[i].trim();

      // Check for empty strings
      if (part === "") {
        throw new Error("Invalid input: empty string is not a number");
      }

      // Parse the number
      const num = parseInt(part, 10);
      console.log("num", num);

      // Check if parsing resulted in NaN (invalid number)
      if (isNaN(num)) {
        throw new Error(`Invalid input: ${part} is not a number`);
      }
      numberArray.push(num);
    }

    // Check for negative numbers
    const negativeNumbers = numberArray.filter((num) => num < 0);
    if (negativeNumbers.length > 0) {
      throw new Error(
        "Negative numbers not allowed: " + negativeNumbers.join(",")
      );
    }

    const validNumbers = numberArray.filter((num) => num <= 1000);

    return validNumbers.reduce((sum, num) => sum + num, 0);
  }
}

module.exports = StringCalculator;
