export default function FrontCard(props){

    let card = props.card;

    return(
        <div className="frontcard">
            <div className="frontcard__header">
                <div className="logobox">
                    <div className="logo"></div>
                    <div className="logoExtra"></div>
                </div>
            </div>
            <div className="frontcard__main">
            <div className="numbergroup">
                {card.cardNumber}
            </div>

            </div>
            <div className="frontcard__footer">
                <div className="frontcard__footer-name">{card.cardHolderName}</div>
                <div className="frontcard__footer-date">{card.month +'/'+ card.year}</div>
            </div>

        </div>

    )
}