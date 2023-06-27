export function formatCardNumber(val) {
  let newStr = val;

  if (val.length < 16) {
    let a = 16 - val.length;
    let extra = "0";
    newStr = val + extra.repeat(a);
  }

  let formatedString = newStr.replace(
    /(\d{4})(\d{4})(\d{4})(\d{4})/,
    "$1 $2 $3 $4"
  );

  return formatedString;
}

export function formatCardNumberInput(val) {
  let formattedInput = [];
  let input = [...val];

  for (let i = 0; i < 19; i++) {
    if (IsNumber(input[i])) {
      formattedInput.push(input[i]);
    }
  }

  formattedInput = formattedInput.join("").trim();

  return {
    number: formattedInput,
  };
}

export function IsNumber(val) {
  const reg = /^\d+$/;
  return reg.test(val);
}

export function isValid(name, value) {
  switch (name) {
    case "cardholder":
      return value.match(/^ *$/) === null;
    case "cardnumber":
      return true;
    case "month":
      return true;
    case "year":
      return true;
    case "cvc":
      return value.match(/^\d+$/);
    default:
      return console.log("Something is wrong");
  }
}

export function formatMonth(val) {

  if (val.length > 2) {
    val = val.substr(1);
  }
  let mon = +val;

  if (mon <= 9 && mon > 0) {
    return "0" + mon;
  }
  if (mon > 12 && mon % 10 === 0) {
    return 0;
  }
  if (mon > 12 && mon % 10 !== 0) {
    return "0" + (mon % 10);
  } else {
    return mon.toString();
  }
}

export function validateCardDateInput(dateValue) {
  if (dateValue.month === "" || dateValue.year === "") {
    return false;
  }
  let today;
  let cardDate;
  cardDate = new Date();
  today = new Date();
  cardDate.setFullYear("20" + dateValue.year, dateValue.month, 1);
  console.log(cardDate);

  if (cardDate < today) {
    console.log(
      "The expiry date is before today's date. Please select a valid expiry date"
    );
    return false;
  } else {
    console.log("Date is valid");
    return true;
  }
}
