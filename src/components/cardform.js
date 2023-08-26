// import React, { useEffect } from "react";
import { useState, useContext } from "react";
import { CurrentCardContext } from "./carddetails";
import { formatMonth, isValid, numFormat } from "./formatCardNumber";
import { formatCardNumberInput } from "./formatCardNumber";
import { validateCardDateInput } from "./formatCardNumber";
import { PatternFormat } from 'react-number-format';
import { numberFormat } from "./formatCardNumber";


export default function CardForm() {
  const { currentCard, setCurrentCard } = useContext(CurrentCardContext);
  const [cardNumber, setCardNumber] = useState("");
  const [cardMonth, setCardMonth] = useState("");
  const [cardYear, setCardYear] = useState("");
  const [cardCvc, setCardCvc] = useState("");
  const [showForm, setShowForm] = useState(true);

  // const [formErrors, setFormErrors] = useState({cardUserValid: '', cardNumberValid:'', cardMonthValid:'', cardYearValid:'', cardCVCValid: ''})
  const [userValid] = useState(true);
  const [numberValid] = useState(true);
  const [monthValid, setMonthValid] = useState(true);
  const [yearValid, setYearValid] = useState(true);
  const [cvcValid, setCvcValid] = useState(true);

  // const { submitted, setSubmitted } = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(event.target);
    setShowForm(false);
  };

  // const fetchDataPost = (details)=>{
  //   return  fetch('https://git.heroku.com/json-file-hosting.git', {
  //     method: 'POST',
  //     body: JSON.stringify({details}),
  //     headers:{
  //       "Content-type": "application/json; charset=UTF-8",
  //     },
  //   })
  //   .then((response)=> response.json())
  //   .then((data)=> {
  //     console.log(data);
  //     setShowSuccess(true);

  //   })
  //   .catch((err)=> {
  //     console.log(err.message);
  //     setShowSuccess(true);
  //   })

  // }




  const handleFormChange = (event) => {
    let { name, value } = event.target;

    const updatedForm = {
      ...currentCard,
      [name]: value,
    };

    if (name === "cardnumber") {
      let { number } = formatCardNumberInput(
        value
      );

      setCardNumber(number);
      updatedForm[name] = number.replaceAll(" ", "");
    }

    if(name === "month"){
      let month = formatMonth(value);
      setCardMonth(month);
      updatedForm[name]=month;
    }

    if(name === "year"){
      setCardYear(value);
      let dateValid = validateCardDateInput(cardMonth, value);
      console.log(dateValid);
      if(dateValid){
        setYearValid(true);
        updatedForm[name]=value;
      }
    }
    if(name === "cvc"){
      setCardCvc(value);
    }

      const valid = isValid(name, value);

    if (valid) {
      setCurrentCard(updatedForm);
      return;
    }
  };

  const handleOnFocusOut = ()=>{
      let cardDate = { month: cardMonth, year: cardYear };
      let dateValid = validateCardDateInput(cardDate);
      if(dateValid){
        setYearValid(true);
        setMonthValid(true);
      }
      else{
        setYearValid(false);
        setMonthValid(false);
      }
  }

  const handleOnBlurCVC = ()=>{
    if(cardCvc.length === 3){
      setCvcValid(true);
    }
    else{
      setCvcValid(false);
    }
  }

  return (
    <div className="form-container">
      { showForm ?
      <form className="cardform" onSubmit={handleSubmit}>
        <div className="formfield">
          <label className="formfield__label">Cardholder name</label>
          <input
            name="cardholder"
            className="formfield__input"
            placeholder="e.g. Jane Appleseed"
            value={currentCard.value}
            onChange={handleFormChange}
          />
          <span className={ userValid ? 'hidden' :'input-error'}>Please enter a name</span>
        </div>

        <div className="formfield">
          <label className="formfield__label">Card number</label>
          <PatternFormat
            id="cnumber"
            name="cardnumber"
            className="formfield__input cardnumber"
            placeholder="e.g. 1234 5678 9123 0000"
            valueIsNumericString format="#### #### #### ####"
            mask=" "
            value={cardNumber}
            onChange={handleFormChange}
          />
          <span className={ numberValid ? 'hidden' :'input-error'}>Wrong format, numbers only</span>
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
                value={cardMonth}
                onBeforeInput={numberFormat}
                onChange={handleFormChange}
                onBlur = {handleOnFocusOut}
              />
              <input
                type="text"
                className="formfield__input date"
                name="year"
                placeholder="YY"
                maxLength="2"
                value={currentCard.value}
                onBeforeInput={numberFormat}
                onChange={handleFormChange}
                onBlur = {handleOnFocusOut}
              />
            </div>
            <span className={ (monthValid && yearValid) ? 'hidden' :'input-error'}>Can't be blank</span>
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
              onBlur = {handleOnBlurCVC}
            />
            <span className={ cvcValid ? 'hidden' :'input-error'}>Can't be blank</span>
          </div>
        </div>
        <button type="submit" className="btn btn__black">
          Confirm
        </button>
      </form>:  <div className="successBox">
            <div className="successCircle"></div>
            <div className="successMessage_big">thank you!</div>
            <div className="successMessage_small">We've added your card details.</div>
            <button type="submit" className="btn btn__black success">
                Continue
            </button>
        </div> }

    </div>
  );
}
