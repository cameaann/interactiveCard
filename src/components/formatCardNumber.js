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

export function formatCardNumberInput(val, cursorPlace) {
  let formattedInput = [];
  let input = [...val];
  let count = 0;

  for (let i = 0; i < 19; i++) {
    if (IsNumber(input[i])) {
      formattedInput.push(input[i]);
      count += 1;
    }

    if (count === 4) {
      formattedInput.push(" ");
      cursorPlace += 1;
      count = 0;
    }
  }

  formattedInput = formattedInput.join("").trim();

  return {
    number: formattedInput,
    cursor: cursorPlace,
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
      return value.match(/1-12/);
    default:
      return console.log("Something is wrong");
  }
}
