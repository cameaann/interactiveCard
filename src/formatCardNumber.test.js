import { formatCardNumber, IsNumber, formatMonth } from "./components/formatCardNumber";

// describe("formatCardNumberInput", () => {
//   test("should return 0000000000000000 formatted by groups", () => {
//     const result = formatCardNumberInput("0000000000000000", 16);
//     expect(result.number).toEqual("0000 0000 0000 0000");
//   });

//   test("should return 1234 1234 1234123 formatted by groups", () => {
//     const result = formatCardNumberInput("1234 1234 1234123", 16);
//     expect(result.number).toEqual("1234 1234 1234 123");
//   });

//   test("should delete one number, the length of number decreases, the cursor is in the same place as it was", () => {
//     const result = formatCardNumberInput("2222 2222 2222 222", 0);
//     expect(result.number).toEqual("2222 2222 2222 222");
//   });
// });

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

describe("formatMonth", () => {
  test("should return '12' for input of 12", ()=>{
    expect(formatMonth(12)).toBe("12");
  });
  test("should return '01' for input of 1", ()=>{
    expect(formatMonth(1)).toBe("01");
  });
  test("should return '02' for input of 2", ()=>{
    expect(formatMonth(2)).toBe("02");
  }); 
  test("should return '05' for input of 15", ()=>{
    expect(formatMonth(15)).toBe("05");
  });
  test("should return '12' for input of 012", ()=>{
    expect(formatMonth('012')).toBe("12");
  });
  test("should return '07' for input of 77", ()=>{
    expect(formatMonth('77')).toBe("07");
  });
  test("should return '11' for input of 111", ()=>{
    expect(formatMonth('111')).toBe("11");
  });
  test("should return '' for input of '0'", ()=>{
    expect(formatMonth('00')).toBe("0");
  })
})