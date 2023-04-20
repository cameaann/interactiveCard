import React from "react";
import { useState, useContext } from "react";
import { CurrentCardContext } from "./carddetails";
import { isValid } from "./formatCardNumber";
import { formatCardNumberInput } from "./formatCardNumber";

export default function CardForm() {
  const { currentCard, setCurrentCard } = useContext(CurrentCardContext);
  const [cardNumber, setCardNumber] = useState("");
  // const { submitted, setSubmitted } = useState(false);

  const handleSubmit = () => {};

  const numFormat = (e) => {
    let val = e.data;

    let re = /^\d+$/;
    if (!val.match(re)) {
      console.log("Wrong format, numbers only");
      e.preventDefault();
    }
  };

  const handleFormChange = (event) => {
    let { name, value, selectionStart } = event.target;

    const updatedForm = {
      ...currentCard,
      [name]: value,
    };

    if (name === "cardnumber") {
      let { number, cursor } = formatCardNumberInput(
        value,
        selectionStart
      );
      requestAnimationFrame(() =>
        event.target.setSelectionRange(cursor, cursor)
      );

      setCardNumber(number);
      updatedForm[name] = number.replaceAll(" ", "");
    }

    const valid = isValid(name, value);

    if (valid) {
      setCurrentCard(updatedForm);
      return;
    }
  };

  return (
    <div className="form-container">
      <form className="cardform" onSubmit={handleSubmit}>
        <div className="formfield">
          <label className="formfield__label">Cardholder name</label>
          <input
            label="Cardholder name"
            name="cardholder"
            className="formfield__input"
            placeholder="e.g. Jane Appleseed"
            value={currentCard.value}
            onChange={handleFormChange}
          />
          <span className="input-error ">Please enter a name</span>
        </div>
        <div className="formfield">
          <label className="formfield__label">Card number</label>
          <input
            id="cnumber"
            label="Card number"
            name="cardnumber"
            className="formfield__input cardnumber"
            placeholder="e.g. 1234 5678 9123 0000"
            value={cardNumber}
            onBeforeInput={numFormat}
            onChange={handleFormChange}
          />
          <span className="input-error">Wrong format, numbers only</span>
        </div>

        <div className="formgroup">
          <div className="formfield">
            <label className="formfield__label">Exp. date (mm/yy)</label>
            <div className="formfield__group">
              <input
                type="text"
                className="formfield__input date"
                name="month"
                placeholder="MM"
                maxLength="2"
                onChange={handleFormChange}
              />
              <input
                type="text"
                className="formfield__input date"
                name="year"
                placeholder="YY"
                maxLength="2"
                onChange={handleFormChange}
              />
            </div>
            <span className="input-error">Can't be blank</span>
          </div>
          <div className="formfield">
            <label className="formfield__label">CVC</label>
            <input
              type="text"
              className="formfield__input cvc"
              name="cvc"
              placeholder="e.g. 123"
              maxLength="3"
              value={currentCard.value}
              onBeforeInput={numFormat}
              onChange={handleFormChange}
            />
            <span className="input-error">Can't be blank</span>
          </div>
        </div>
        <button type="submit" className="btn btn__black">
          Confirm
        </button>
      </form>
    </div>
  );
}
