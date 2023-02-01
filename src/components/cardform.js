import React from 'react';
export default class CardForm extends React.Component {
    constructor(props) {
        super(props);
        // let currentState = props.cdetails;
        this.state = {
            userName: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleCardHolderChange = this.handleCardHolderChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        console.log(event);
        this.setState({ value: event.target.value });
        console.log(this.state);
    }

    handleSubmit(event) {
        this.setState({ value: event.target.value });
        console.log(this.state);
    }

    handleCardHolderChange(event) {
        this.setState({ userName: event.target.value });
        console.log(this.state);
    }

    render() {
        // let cardHolderName = document.getElementsByName("cvName");

        return (
            <div className="form-container">
                <form className="cardform" onSubmit={this.handleSubmit}>
                    <div className="formfield">
                        <label className="formfield__label">
                            Cardholder name
                        </label>
                        <input type="text" className="formfield__input" name="cvName" placeholder="e.g. Jane Appleseed" onChange={this.handleCardHolderChange} />
                    </div>
                    <div className="formfield">
                        <label className="formfield__label">
                            Card number
                        </label>
                        <input type="text" className="formfield__input" name="cvNumber" placeholder="e.g. 1234 5678 9123 0000" onChange={this.handleChange} />
                    </div>
                    <div className="formgroup">
                        <div className="formfield">
                            <label className="formfield__label">
                                Exp. date (mm/yy)
                            </label>
                            <div className="formfield__group">
                                <input type="text" className="formfield__input date" name="month" placeholder="MM" onChange={this.handleChange} />
                                <input type="text" className="formfield__input date" name="year" placeholder="YY" onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className="formfield">
                            <label className="formfield__label">
                                CVC
                            </label>
                            <input type="text" className="formfield__input cvc" name="cvc" placeholder="e.g. 123" onChange={this.handleChange} />
                        </div>
                    </div>
                    <button type="submit" className="btn btn__black">
                        Confirm
                    </button>

                </form>
            </div>
        )

    }


}