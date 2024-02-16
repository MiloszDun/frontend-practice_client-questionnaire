import './Button.css';

const Button = ({text}) => {
  return (
    <button type="submit" className="submit-button">{text}</button>
  )
}

export default Button;