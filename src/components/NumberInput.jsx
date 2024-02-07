export const NumberInput = ({text, onChange, value}) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <>
      <label htmlFor="budget">{text}</label>
      <input type="number" value={value} onChange={handleChange} id="budget" name="budget" required className="input-field" />
    </>
  )
}