import { validateCardDateInput } from "./components/formatCardNumber";

describe("validateCardDateInput", () => {
  test("should return false if the date is less than today one", () => {
    let dateVal = { year:'23', month:'04'}
    const result = validateCardDateInput(dateVal);
    expect(result).toBe(false);
  });
  test("should return true if the date is greater than today one", () => {
    let dateVal = { year:'24', month:'02'}
    const result = validateCardDateInput(dateVal);
    expect(result).toBe(true);
  });
  test("should return false if the date is greater than today one", () => {
    let dateVal = { year:'8', month:'02'}
    const result = validateCardDateInput(dateVal);
    expect(result).toBe(false);
  });


});
