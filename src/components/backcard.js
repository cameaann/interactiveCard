
export default function BackCard(props){
    let card = props.card;

    return(
        <div className="backcard">
            <div className = "backcard__cvc">{card.cvc}</div>
        </div>
    )
}