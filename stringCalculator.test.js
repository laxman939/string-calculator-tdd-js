const StringCalculator = require("./stringCalculator");

describe("StringCalculator", () => {
  let calculator;

  beforeEach(() => {
    calculator = new StringCalculator();
  });

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

  // 4. Any amount of numbers
  test("should return the sum of any amount of comma separated numbers", () => {
    expect(calculator.add("1,2,3")).toBe(6);
    expect(calculator.add("1,2,3,4,5,6")).toBe(21);
    expect(calculator.add("10,20,30")).toBe(60);
  });

  // 5. Newline as a separator
  test("should handle newlines as separators", () => {
    expect(calculator.add("1\n2,3")).toBe(6);
    expect(calculator.add("1\n2\n3")).toBe(6);
    expect(calculator.add("1,2\n3")).toBe(6);
  });

  //   6. Custom delimiter
  test("should handle custom delimiters", () => {
    expect(calculator.add("//;\n1;2")).toBe(3);
    expect(calculator.add("//|\n1|2|3")).toBe(6);
    expect(calculator.add("//:\n1:2:3:4")).toBe(10);
  });

  // 7. Negative numbers
  test("should throw an error for negative numbers", () => {
    expect(() => calculator.add("-2")).toThrow(
      "Negative numbers not allowed: -2"
    );
    expect(() => calculator.add("-1,2")).toThrow(
      "Negative numbers not allowed: -1,2"
    );
    expect(() => calculator.add("1,-2,3")).toThrow(
      "Negative numbers not allowed: 1,-2,3"
    );
  });
});
