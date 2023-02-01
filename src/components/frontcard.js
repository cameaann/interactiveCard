export default function FrontCard(props){

    let cardDetails = props.card;

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
                {cardDetails.cardNumber}
            </div>

            </div>
            <div className="frontcard__footer">
                <div className="frontcard__footer-name">{cardDetails.userName}</div>
                <div className="frontcard__footer-date">{cardDetails.date}</div>
            </div>

        </div>

    )
}