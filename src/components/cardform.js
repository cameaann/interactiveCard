import React from "react";
import { useState } from "react";
import FormInput from "./formInput";

// export const FormContext = React.createContext({
//   form: {},
//   handleFormChange: () => {},
// });

export default function CardForm(props) {
  const [form, setForm] = useState({
    cardHolderName: "",
    cardNumber: "",
    month: "",
    year: "",
    cvc: "",
  });

//   const { children } = props;

  const handleSubmit = () => {};

  const handleFormChange = (event) => {
     const {name, value} = event.target;

    const updatedForm = {
      ...form,
      [name]: value,
    };
    setForm(updatedForm);
    console.log(form[name]);
  };

  //   const handleCardHolderChange = () => {};

  return (
    <div className="form-container">
      <form className="cardform" onSubmit={handleSubmit}>
        <FormInput
          label="Cardholder name"
          name="cardholder"
          className="formfield__input"
          placeholder="e.g. Jane Appleseed"
          onChange={handleFormChange}
        />
        <FormInput
          label="Card number"
          name="cardnumber"
          className="formfield__input"
          placeholder="e.g. 1234 5678 9123 0000"
          onChange={handleFormChange}
        />
        {/* <div className="formfield">
          <label className="formfield__label">Cardholder name</label>
          <input
            type="text"
            className="formfield__input"
            name="cvName"
            placeholder="e.g. Jane Appleseed"
            value={form.cardHolderName}
            onChange={handleFormChange}
          />
        </div>
        <div className="formfield">
          <label className="formfield__label">Card number</label>
          <input
            type="text"
            className="formfield__input"
            name="cvNumber"
            placeholder="e.g. 1234 5678 9123 0000"
            value={form.cardNumber}
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
                value={form.month}
                onChange={handleFormChange}
              />
              <input
                type="text"
                className="formfield__input date"
                name="year"
                placeholder="YY"
                value={form.year}
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
              value={form.cvc}
              onChange={handleFormChange}
            />
          </div>
        </div> */}
        <button type="submit" className="btn btn__black">
          Confirm
        </button>
      </form>
    </div>
  );
}
