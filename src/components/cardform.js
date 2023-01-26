export default function CardForm(){

    return(
        <div className="form-container">
            <form className="cardform">
                <div className="formfield">
                    <label className="formfield__label">
                        Cardholder name
                    </label>
                    <input type="text" className="formfield__input" name="cvName" />
                </div>
                <div className="formfield">
                    <label className="formfield__label">
                        Card number
                    </label>
                    <input type="text" className="formfield__input" name="cvNumber" />
                </div>
                <div className="formgroup">
                    <div className="formfield">
                        <label className="formfield__label">
                            Exp. date(mm/yy)
                        </label>
                        <div className="formfield__group">
                            <input type="text" className="formfield__input" name="cvMonth" />
                            <input type="text" className="formfield__input" name="cvYear" />
                        </div>
                        </div>
                    <div className="formfield">
                        <label className="formfield__label">
                            CVC
                        </label>
                        <input type="text" className="formfield__input" name="cvc" />
                </div>
                </div>

            </form>
        </div>
    )
}