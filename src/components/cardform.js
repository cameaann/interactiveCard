import React from "react";
import { useContext } from "react";
import { CurrentCardContext } from "./carddetails";
import { formatCardNumber } from "./formatCardNumber";

export default function CardForm() {
  const { currentCard, setCurrentCard } = useContext(CurrentCardContext);

  const handleSubmit = () => {};

  const handleFormChange = (event) => {
    const { name, value } = event.target;

    const updatedForm = {
      ...currentCard,
      [name]: value,
    };

    setCurrentCard(updatedForm);
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
        </div>
        <div className="formfield">
          <label className="formfield__label">Card number</label>
          <input
            label="Card number"
            name="cardnumber"
            className="formfield__input cardnumber"
            placeholder="e.g. 1234 5678 9123 0000"
            value={currentCard.value}
            maxLength="16"
            onChange={handleFormChange}
          />
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
          </div>
          <div className="formfield">
            <label className="formfield__label">CVC</label>
            <input
              type="text"
              className="formfield__input cvc"
              name="cvc"
              placeholder="e.g. 123"
              onChange={handleFormChange}
            />
          </div>
        </div>
        <button type="submit" className="btn btn__black">
          Confirm
        </button>
      </form>
    </div>
  );
}
