import { formatCardNumberInput, formatCardNumber, IsNumber, ChangeNumber } from "./components/formatCardNumber";

describe("formatCardNumberInput", () => {
  test("should return 0000000000000000 formatted by groups", () => {
    expect(formatCardNumberInput("0000000000000000", 16)).toEqual(
      { formattedNumber:"0000 0000 0000 0000",
        cursor:20
    }
    );
  });
  test("should return 1234 1234 1234123 formatted by groups with leading zero", () => {
    expect(formatCardNumberInput("1234 1234 1234123", 16)).toEqual(
      { formattedNumber:"1234 1234 1234 123",
        cursor:19
      }
    );
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

describe("ChangeNumber", () => {
  test("should delete one number and insert another one in the same place", () => {
    expect(ChangeNumber("2222 2422 2222 2222", "5", "6")).toEqual({
      number: "2222 2522 2222 2222",
      cursorPlace: "6"
    });
  });
});



describe("IsNumber", () => {
  test("should accept only numbers", () => {
    expect(IsNumber("0000HJUK")).toBe(false);
  });
});
