import { formatCardNumber } from "./formatCardNumber";

export default function FrontCard(props) {
  let card = props.card;

  function formatString(str){
    let formatedStr = str.slice(0, 25);
    if(str.length>25){ return formatedStr+'...';}
    return formatedStr;
}
  return (
    <div className="frontcard">
      <div className="frontcard__header">
        <div className="logobox">
          <div className="logo"></div>
          <div className="logoExtra"></div>
        </div>
      </div>
      <div className="frontcard__main">
        <div className="numbergroup">{formatCardNumber(card.cardnumber)}</div>
      </div>
      <div className="frontcard__footer">
        <div className="frontcard__footer-name">{formatString(card.cardholder)}</div>
        <div className="frontcard__footer-date">
          {card.month + "/" + card.year}
        </div>
      </div>
    </div>
  );
}
