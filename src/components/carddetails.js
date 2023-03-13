import React from "react";
import { useState } from "react";
import CardForm, { FormContext } from "./cardform";
import FrontCard from "./frontcard";

export default function CardDetails() {



  const [form, setform] = useState({
    cardHolderName: "Jane Appleseed",
    cardNumber: "1234 5678 9123 0000",
    month: "02",
    year: "22",
    cvc: "123",
  });

  return (
    // <FormContext.Provider
    //   value={{
    //     handleFormChange: () => {},
    //     FrontCard,
    //   }}
    // >
      <div className="main">
        <FrontCard card={form} />
        <div className="leftside"></div>
        <CardForm
          formInitialValues={{
            cardHolderName: "Jane Appleseed",
            cardNumber: "1234 5678 9123 0000",
            month: "02",
            year: "22",
          cvc: "123",
          }}
        />
      </div>
    // </FormContext.Provider>
  );
}
