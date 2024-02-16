import './CheckboxInput.css';

const CheckboxInput = ({text, options, onChange, value}) => {
  const handleChange = (e) => {
    onChange(e.target.value, e.target.checked);
  };

  return (
    <>
      <fieldset className="fieldset">
      <legend>{text}</legend>
      <div className="features-checkbox-group">
        {options.map((option) => (
            <div key={option.id}>
              <input
                type="checkbox"
                id={option.id}
                name="features"
                value={option.value}
                checked={value.includes(option.value)}
                onChange={handleChange}
                className="checkbox-input"
              />
              <label className="checkbox-label" htmlFor={option.id}>{option.value}</label>
            </div>
          )
        )}
      </div>
    </fieldset>
  </>
  )
}

export default CheckboxInput;