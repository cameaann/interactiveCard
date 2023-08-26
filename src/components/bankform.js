import * as React from "react";
import { useRef, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useContext } from "react";
import { CurrentCardContext } from "./carddetails";
import { PatternNumber } from "./pattern-number";
import { formatCardNumberInput } from "./formatCardNumber";
import { formatMonth } from "./formatCardNumber";
import { validateCardDateInput } from "./formatCardNumber";
import { numberFormat } from "./formatCardNumber";
import { checkCardNumberInput } from "./formatCardNumber";

export default function BankForm() {
  const { currentCard, setCurrentCard } = useContext(CurrentCardContext);
  const [showForm, setShowForm] = useState(true);

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    control,
    formState: { errors, isDirty, isValid  },
  } = useForm({
    mode: "all",
  });

  let ref = useRef();

  const onSubmit = async () => {
    // async request which may result error
    // event.preventDefault();
    try {
      // await fetch()

      console.log();
      setShowForm(false);

    } catch (event) {
      // handle your error
    }
  };

  const handleOnChange = (event) => {
    let { name, value } = event.target;

    let updatedForm = {
      ...currentCard,
      [name]: value,
    };
    if (name === "cardnumber") {
      let { number } = formatCardNumberInput(value);
      updatedForm[name] = number.replaceAll(" ", "");
    }

    setCurrentCard(updatedForm);
  };


  return (
    <div className="form-container">
      { showForm ?
      <form className="cardform" onSubmit={handleSubmit(onSubmit)}>
        <div className="formfield">
          <label className="formfield__label">Cardholder name</label>
          <input
            type="text"
            name="cardholder"
            className="formfield__input"
            placeholder="e.g. Jane Appleseed"
            {...register("cardholder", {
              minLength: 1,
              onChange: (e) => {
                handleOnChange(e);
              },
              required: true,
            })}
            aria-invalid={errors.cardholder ? "true" : "false"}
          />
          {errors.cardholder?.type === "required" && (
            <p role="alert" className="input-error">The name is required</p>
          )}
        </div>

        <div className="formfield">
          <label className="formfield__label">Card number</label>
          <Controller
            name="cardnumber"
            control={control}
            value=''
            rules={{ required: true,
                validate: {
                    checkLength: () => checkCardNumberInput(getValues("cardnumber"))}
             }}
            render={({ field: { onChange, onBlur, e } }) => (
              <>
                <PatternNumber
                  getInputRef={ref}
                  id="cnumber"
                  name="cardnumber"
                  className="formfield__input cardnumber"
                  placeholder="e.g. 1234 5678 9123 0000"
                  valueIsNumericString
                  format="#### #### #### ####"
                  mask=" "
                  onChange={(e) => {
                    onChange(e);
                    handleOnChange(e);
                  }}
                  onBlur={(e) => {
                    onBlur(e);
                  }}
                  aria-invalid={errors.cardnumber ? "true" : "false"}
                />
                {errors.cardnumber?.type === "required" && (
                  <p role="alert" className="input-error">Card number is required</p>
                )}
                {errors.cardnumber?.type === "checkLength" && (
                  <p role="alert" className="input-error">Enter the full card number</p>
                )}
              </>
            )}
          />
        </div>

        <div className="formgroup">
          <div className="formfield">
            <label className="formfield__label">Exp. date (mm/yy)</label>
            <div className="formfield__group">
              <input
                type="text"
                pattern="\d*"
                className="formfield__input date"
                name="month"
                placeholder="MM"
                onBeforeInput={numberFormat}
                {...register("month", {
                  onChange: (e) => {
                    setValue("month", formatMonth(e.target.value));
                    handleOnChange(e);
                  },
                  required: true,
                  validate: {
                    checkMonth: (value) => value.length > 1,
                    checkDate: (value) => {
                        let year = getValues("year");
                        if(value.length<=1){
                          return;
                        }
                          let cardDate = { month: value, year: year };
                          let valid = validateCardDateInput(cardDate);
                          return valid;
                        },
                  },
                })}
                aria-invalid={errors.month ? "true" : "false"}
              />

              <input
                type="text"
                pattern="\d*"
                className="formfield__input date"
                name="year"
                placeholder="YY"
                minLength="2"
                maxLength="2"
                onBeforeInput={numberFormat}
                {...register("year", {
                  onChange: (e) => {
                    handleOnChange(e);
                  },
                  required: true,
                  minLength: 2,
                  maxLength: 2,
                  validate: {
                    checkDate: (value) => {
                      let month = getValues("month");
                      let cardDate = { month: month, year: value };
                      let valid = validateCardDateInput(cardDate);
                      return valid;
                    },
                  },
                })}
                aria-invalid={errors.year ? "true" : "false"}
              />
            </div>
            {(errors.month?.type === "required" ||
              errors.year?.type === "required") && (
              <p role="alert" className="input-error">Can't be blank.</p>
            )}
            { (errors.month?.type === "checkDate" && errors.year?.type === "checkDate") && (
              <p role="alert" className="input-error">
                The card date is expired.
              </p>
            )}
          </div>

          <div className="formfield">
            <label className="formfield__label">CVC</label>
            <input
              type="text"
              pattern="\d*"
              className="formfield__input cvc"
              name="cvc"
              placeholder="e.g. 123"
              minLength="3"
              maxLength="3"
              onBeforeInput={numberFormat}
              {...register("cvc", {
                minLength: 3,
                maxLength: 3,
                onChange: (e) => {
                  handleOnChange(e);
                },
                required: true,
              })}
              aria-invalid={errors.cvc ? "true" : "false"}
            />
            {errors.cvc?.type === "required" && (
              <p role="alert" className="input-error">Can't be blank</p>
            )}
            {errors.cvc?.type === "minLength" && (
              <p role="alert" className="input-error">Should be 3 numbers</p>
            )}
          </div>
        </div>

        <button type="submit" className="btn btn__black" disabled = { !isDirty || !isValid}>
          Confirm
        </button>
      </form> : <div className="successBox">
            <div className="successCircle">
              <span className="icon-check success-icon"></span>
            </div>
            <div className="successMessage_big">thank you!</div>
            <div className="successMessage_small">We've added your card details.</div>
            <button type="submit" className="btn btn__black success">
                Continue
            </button>
        </div>

      }
    </div>
  );
}
