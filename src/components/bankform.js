import { Controller, useForm } from "react-hook-form";
import { useContext } from "react";
import { CurrentCardContext } from "./carddetails";
import { PatternFormat } from "react-number-format";
import { formatCardNumberInput } from "./formatCardNumber";

export default function BankForm() {
  const { currentCard, setCurrentCard } = useContext(CurrentCardContext);
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({mode: "onBlur"});

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleOnChange = (event) => {
    let { name, value } = event.target;

    const updatedForm = {
      ...currentCard,
      [name]: value,
    };
    setCurrentCard(updatedForm);
    console.log(updatedForm);
  };

  const handleOnFocusOut = () => {

    console.log("Blur");
  };

  return (
    <div className="form-container">
      <form className="cardform" onSubmit={handleSubmit(onSubmit)}>
        <div className="formfield">
          <label className="formfield__label">Cardholder name</label>
          <input
            type="text"
            name="cardholder"
            className="formfield__input"
            placeholder="e.g. Jane Appleseed"
            {...register("cardholder", {
              onChange: (e) => {
                handleOnChange(e);
              },
              onBlur: () => {
                handleOnFocusOut();
              },
              required: "The name is required.",
            })}
          />
          {errors.cardholder && (
            <p className="input-error">{errors.cardholder.message}</p>
          )}
        </div>

        <div className="formfield">
          <label className="formfield__label">Card number</label>
          <Controller
            render={({ fields }) => (
              <PatternFormat
                id="cnumber"
                name="cardnumber"
                className="formfield__input cardnumber"
                placeholder="e.g. 1234 5678 9123 0000"
                valueIsNumericString
                format="#### #### #### ####"
                mask=" "
                required
                onValueChange={(v, t) => {
                  handleOnChange(t.event);
                }}
                onBlur={handleOnFocusOut}

                {...fields}
              />
            )}
            name="cardnumber"
            control={control}
          />
          {errors.cardnumber && (
            <p className="input-error">Can't be blank.</p>
          )}
        </div>

        <div className="formgroup">
          <div className="formfield">
            <label className="formfield__label">Exp. date (mm/yy)</label>
            <div className="formfield__group">
              <input
                type="text"
                className="formfield__input date"
                name="month"
                placeholder="MM"
                {...register("month", {
                  onChange: (e) => {
                    handleOnChange(e);
                  },
                  onBlur: (e) => {
                    handleOnFocusOut(e);
                  },
                  required: true,
                  validate: {
                    checkMonth: (value) => value.length > 0,
                  },
                })}
                aria-invalid={errors.month ? "true" : "false"}
              />

              <input
                type="text"
                className="formfield__input date"
                name="year"
                placeholder="YY"
                maxLength="2"
                {...register("year", {
                  onChange: (e) => {
                    handleOnChange(e);
                  },
                  onBlur: (e) => {
                    handleOnFocusOut(e);
                  },
                  required: true,
                  validate: {
                    checkYear: (value) => value.length > 0,
                  },
                })}
                aria-invalid={errors.year ? "true" : "false"}
              />
            </div>
            {(errors.month?.type === "required" || errors.year?.type === "required") && (
              <p className="input-error">Can't be blank.</p>
            )}
            {/* <span className={ (monthValid && yearValid) ? 'hidden' :'input-error'}>Can't be blank</span> */}
          </div>
        </div>
      </form>
    </div>
  );
}
