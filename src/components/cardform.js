import React from "react";
import FormInput from "./formInput";
import { useContext } from "react";
import { CurrentCardContext } from "./carddetails";

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
        <FormInput
          label="Cardholder name"
          name="cardholder"
          className="formfield__input"
          placeholder="e.g. Jane Appleseed"
          value={currentCard.value}
          onChange={handleFormChange}
        />
        <FormInput
          label="Card number"
          name="cardnumber"
          className="formfield__input"
          placeholder="e.g. 1234 5678 9123 0000"
          value={currentCard.value}
          maxlength="16"
          onChange={handleFormChange}
        />
        <button type="submit" className="btn btn__black">
          Confirm
        </button>
      </form>
    </div>
  );
}
