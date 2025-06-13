const StringCalculator = require("./stringCalculator");

describe("StringCalculator", () => {
  let calculator;

  beforeEach(() => {
    calculator = new StringCalculator();
  });

  // Empty string
  test("should return 0 for an empty string", () => {
    expect(calculator.add("")).toBe(0);
  });

  // Single number
  test("should return the number itself for a single number", () => {
    expect(calculator.add("5")).toBe(5);
    expect(calculator.add("1")).toBe(1);
  });
});
