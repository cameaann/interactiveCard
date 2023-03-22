
export default function FormInput(props) {
  const { label, type = "text", name, className, value, onChange, placeholder, maxlength } = props;

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
        maxLength = { maxlength }
      />
    </div>
  );
}
