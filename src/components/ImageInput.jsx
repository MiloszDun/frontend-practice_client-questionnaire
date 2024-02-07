export const ImageInput = ({text, onChange, value}) => {
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onChange(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }

  return (
    <>
      <label htmlFor="company-logo">{text}</label>
      <input type="file" onChange={handleImageChange} id="company-logo" name="company-logo" accept="image/png, image/jpeg" required className="input-field" />
      {value && <img src={value} style={{height: '100px'}} />}
    </>
  )
}