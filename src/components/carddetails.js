import React from "react";
import { createContext, useState } from "react";
// import CardForm from "./cardform";
import BankForm from "./bankform";
import FrontCard from "./frontcard";
import BackCard from "./backcard";
// import SuccessRegistration from "./successRegistration";

export const CurrentCardContext = createContext(null);

export default function CardDetails() {
  //   const [currentCard, setCurrentCard] = useState(null);

  const [currentCard, setCurrentCard] = useState({
    cardholder: "Jane Appleseed",
    cardnumber: "0000 0000 0000 0000",
    month: "00",
    year: "00",
    cvc: "000",
  });

  return (
    <CurrentCardContext.Provider
      value={{
        currentCard,
        setCurrentCard
      }}
    >
      <div className="main">
        <FrontCard card={currentCard} />
        <div className="leftside"></div>
        {/* <CardForm /> */}
        <BankForm />
        <BackCard card={currentCard} />
      </div>
    </CurrentCardContext.Provider>
  );
}
