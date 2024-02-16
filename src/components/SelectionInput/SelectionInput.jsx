const SelectionInput = ({text, options, onChange, value}) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <>
      <label htmlFor="telescope-size">{text}</label>
      <select onChange={handleChange} value={value} id="telescope-size" name="telescope-size" required className="input-field">
        <option value="">--Please choose an option--</option>
        {options.map((option) => {
          return (
            <option key={option.id} value={option.value}>{option.value}</option>
          )
        })}
      </select>
    </>
  )
}

export default SelectionInput;