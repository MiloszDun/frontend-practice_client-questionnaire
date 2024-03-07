import { useContext, useState } from "react"
import { SubmissionsContext } from "../../data/SubmissionContext"
import { TextField, Select, MenuItem, InputLabel, FormControl, Button, Checkbox, FormControlLabel, FormGroup, FormLabel, Typography, Grid, Box, Paper } from '@mui/material';

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

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogo(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFeatureChange = (optionValue) => (event) => {
    setFeatures(prevFeatures => {
      const isFeatureSelected = event.target.checked;
      if (isFeatureSelected) {
        return [...prevFeatures, optionValue];
      } else {
        return prevFeatures.filter(feature => feature !== optionValue);
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
    <Paper sx={{ p: 2, borderRadius: 2 }}>
      <form onSubmit={handleSubmit} className="observatory-form">
        <Typography variant="h4" gutterBottom>
          Enter your data
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
          <TextField 
            label="Telescope Name" 
            variant="outlined" 
            fullWidth 
            value={name} 
            onChange={(e) => handleNameChange(e.target.value)} 
            required 
          />
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth required sx={{ marginBottom: 2 }}>
              <InputLabel id="telescope-size-label">Size</InputLabel>
              <Select
                labelId="telescope-size-label"
                id="telescope-size"
                value={telescopeSize}
                label="Size"
                onChange={(e) => handleTelescopeSizeChange(e.target.value)}
                name="telescope-size"
              >
                <MenuItem value="">
                  <em>--Please choose an option--</em>
                </MenuItem>
                {sizeOptions.map((option) => (
                  <MenuItem key={option.id} value={option.value}>{option.value}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Budget"
              type="number"
              variant="outlined"
              fullWidth
              value={budget}
              onChange={(e) => handleBudgetChange(e.target.value)}
              required
              sx={{ marginBottom: 2 }}
            />
          </Grid>

          <Grid item xs={12}>
            <input
              accept="image/png, image/jpeg"
              style={{ display: 'none' }}
              id="company-logo"
              type="file"
              onChange={handleLogoChange}
            />
            <label htmlFor="company-logo">
              <Button variant="outlined" component="span">
                Upload company logo (JPG or PNG)
              </Button>
            </label>
            {logo && (
              <Box sx={{ marginY: 2 }}>
                <img src={logo} alt="Company logo" style={{ height: '100px' }} />
              </Box>
            )}
          </Grid>

          <Grid item xs={12}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Select Features</FormLabel>
              <FormGroup>
                {featuresOptions.map((option) => (
                  <FormControlLabel
                    key={option.id}
                    control={
                      <Checkbox
                        checked={features.includes(option.value)}
                        onChange={handleFeatureChange(option.value)}
                        name={option.value}
                      />}
                    label={option.value}
                  />
                ))}
              </FormGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained">Submit</Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  )
}

export default Form;