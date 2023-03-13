// import { useContext } from 'react';
// import { FormContext } from './cardform';

export default function FormInput(props) {
  const { label, type = "text", name, className, placeholder, onChange, value } = props;

  // const formContext = useContext(FormContext);
  // const { form, handleFormChange } = formContext;
  // console.log(form);

  return (
    <div className="formfield">
      <label className="formfield__label">{label}</label>
      <input
        type={type}
        name={name}
        className={className}
        value={value}
        placeholder = {placeholder}
        onChange={onChange}
      />
    </div>
  );
}
