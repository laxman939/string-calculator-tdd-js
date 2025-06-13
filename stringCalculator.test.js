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
});
