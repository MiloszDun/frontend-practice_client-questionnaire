const TextInput = ({text, onChange, value}) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <>
      <label htmlFor="name">{text}</label>
      <input type="text" value={value} onChange={handleChange} id="name" name="name" required className="input-field" />
    </>
  )
}

export default TextInput;