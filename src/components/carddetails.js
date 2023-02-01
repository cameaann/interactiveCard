import React from 'react';
import CardForm from './cardform';
import FrontCard from './frontcard';

export default class CardDetails extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userName: "Jane Appleseed",
            cardNumber: "0000 0000 0000 0000",
            date:"00/00",
            cvc:"000"
        }
    }
render(){
    let carddetails = this.state;

    return(
        <div className="main">
        <FrontCard card = { carddetails } />
        <div className="leftside"></div>
        <CardForm  cdetails = { carddetails }  />
        </div>
    )
}


}