const StringCalculator = require("./stringCalculator");

describe("StringCalculator", () => {
  let calculator;

  beforeEach(() => {
    calculator = new StringCalculator();
  });

  describe("Basic functionality (up to 2 number)", () => {
    // 1. Empty string
    test("should return 0 for an empty string", () => {
      expect(calculator.add("")).toBe(0);
    });

    // 2. Single number
    test("should return the number itself for a single number", () => {
      expect(calculator.add("5")).toBe(5);
      expect(calculator.add("1")).toBe(1);
    });

    // 3. Two numbers
    test("should return the sum of two comma separated numbers", () => {
      expect(calculator.add("1,2")).toBe(3);
      expect(calculator.add("10,20")).toBe(30);
    });
  });

  describe("Handle unknown amount of numbers", () => {
    // 4. Any amount of numbers
    test("should return the sum of any amount of comma separated numbers", () => {
      expect(calculator.add("1,2,3")).toBe(6);
      expect(calculator.add("1,2,3,4,5,6")).toBe(21);
      expect(calculator.add("10,20,30")).toBe(60);
    });
  });

  describe("Handle new lines between numbers", () => {
    // 5. Newline as a separator
    test("should handle newlines as separators", () => {
      expect(calculator.add("1\n2,3")).toBe(6);
      expect(calculator.add("1\n2\n3")).toBe(6);
      expect(calculator.add("1,2\n3")).toBe(6);
    });
  });

  describe("Support custom delimiters", () => {
    //   6. Custom delimiter
    test("should handle custom delimiters", () => {
      expect(calculator.add("//;\n1;2")).toBe(3);
      expect(calculator.add("//|\n1|2|3")).toBe(6);
      expect(calculator.add("//:\n1:2:3:4")).toBe(10);
    });
  });

  describe("Handle negative numbers", () => {
    // 7. Negative numbers
    test("should throw an error for negative numbers", () => {
      expect(() => calculator.add("-2")).toThrow(
        "Negative numbers not allowed: -2"
      );
    });

    test("should show all negative numbers in the error message", () => {
      expect(() => calculator.add("1,-2,3,-4")).toThrow(
        "Negative numbers not allowed: -2,-4"
      );
    });
  });

  describe("Handle numbers greater than 1000", () => {
    // 8. Ignore numbers greater than 1000
    test("should ignore numbers greater than 1000", () => {
      expect(calculator.add("1001,2")).toBe(2);
      expect(calculator.add("1000,2000")).toBe(1000);
      expect(calculator.add("1,2,1001")).toBe(3);
      expect(calculator.add("1000,1")).toBe(1001);
    });
  });

  describe("Edge cases", () => {
    // 9. Handle whitespace around numbers and zero
    test("should handle whitespace around numbers", () => {
      expect(calculator.add(" 1, 2 ")).toBe(3);
    });

    test("should handle zero", () => {
      expect(calculator.add("0")).toBe(0);
      expect(calculator.add("1,0")).toBe(1);
      expect(calculator.add("1,0,2")).toBe(3);
    });
  });

  describe("Invalid input", () => {
    // 10. Invalid input
    test("should throw an error for invalid input", () => {
      expect(() => calculator.add("1,2,a")).toThrow(
        "Invalid input: a is not a number"
      );

      expect(() => calculator.add("1,2,")).toThrow(
        "Invalid input: empty string is not a number"
      );
      expect(() => calculator.add("1,,2")).toThrow(
        "Invalid input: empty string is not a number"
      );
    });
  });
});
