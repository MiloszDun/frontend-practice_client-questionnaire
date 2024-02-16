import { useContext, useState } from "react"
import { SubmissionsContext } from "../../data/SubmissionContext"
import TextInput from '../TextInput'
import SelectionInput from "../SelectionInput"
import NumberInput from "../NumberInput"
import ImageInput from "../ImageInput"
import CheckboxInput from "../CheckboxInput"
import Button from "../Button"
import './Form.css';

const Form = ({children}) => {

  const sizeOptions = [
    {id: 1, value: 'Small'},
    {id: 2, value: 'Medium'},
    {id: 3, value: 'Large'},
  ]

  const featuresOptions = [
    {id: 1, value: 'Solar Power'},
    {id: 2, value: 'Artificial Gravity'},
    {id: 3, value: 'Meteor Shield'}
  ]

  const {addSubmission} = useContext(SubmissionsContext)

  // Variables for constructing a new submission object
  const [name, setName] = useState('');
  const [telescopeSize, setTelescopeSize] = useState('');
  const [budget, setBudget] = useState(0);
  const [features, setFeatures] = useState([]);
  const [logo, setLogo] = useState('');

  // Handlers for changing the state of each input field
  const handleNameChange = (value) => {
    setName(value);
  };

  const handleTelescopeSizeChange = (value) => {
    setTelescopeSize(value);
  };

  const handleBudgetChange = (value) => {
    setBudget(value);
  };

  const handleLogoChange = (value) => {
    setLogo(value);
  };

  const handleFeatureChange = (value, checked) => {
    setFeatures(prevFeatures => {
      if (checked) {
        return [...prevFeatures, value];
      } else {
        return prevFeatures.filter(feature => feature !== value);
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newSubmission = {
      id: crypto.randomUUID(),
      name,
      telescopeSize,
      budget,
      features,
      logo,
    };
    addSubmission(newSubmission);
  }

  return (
    <form onSubmit={handleSubmit} className="observatory-form">
      <TextInput text='Telescope Name' onChange={handleNameChange} value={name} />
      <SelectionInput text='Size' options={sizeOptions} onChange={handleTelescopeSizeChange} value={telescopeSize}/>
      <NumberInput text='Budget' onChange={handleBudgetChange} value={budget}/>
      <ImageInput text='Company logo (JPG or PNG)' onChange={handleLogoChange} value={logo}/>
      <CheckboxInput text='Select Features' options={featuresOptions} onChange={handleFeatureChange} value={features}/>
      <Button text='Submit' />
    </form>
  )
}

export default Form;