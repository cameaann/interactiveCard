import { formatCardNumberInput, formatCardNumber, IsNumber } from "./components/formatCardNumber";

describe("formatCardNumberInput", () => {
  test("should return 0000000000000000 formatted by groups", () => {
    const result = formatCardNumberInput("0000000000000000", 16);
    expect(result.number).toEqual("0000 0000 0000 0000");
  });

  test("should return 1234 1234 1234123 formatted by groups", () => {
    const result = formatCardNumberInput("1234 1234 1234123", 16);
    expect(result.number).toEqual("1234 1234 1234 123");
  });

  test("should delete one number, the length of number decreases, the cursor is in the same place as it was", () => {
    const result = formatCardNumberInput("2222 2222 2222 222", 0);
    expect(result.number).toEqual("2222 2222 2222 222");
  });
});

describe("formatCardNumber", () => {
  test("should return 0000000000000000 formatted by groups", () => {
    expect(formatCardNumber("0000000000000000")).toBe(
      "0000 0000 0000 0000"
    );
  });

  test("should return 123412341234123 formatted by groups with leading zero", () => {
    expect(formatCardNumber("123412341234123")).toBe(
      "1234 1234 1234 1230"
    );
  });
});


describe("IsNumber", () => {
  test("should accept only numbers", () => {
    expect(IsNumber("0000HJUK")).toBe(false);
  });
});
