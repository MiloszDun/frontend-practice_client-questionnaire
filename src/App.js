import Form from "./components/Form";
import SubmissionsList from "./components/SubmissionsList";
import { SubmissionsProvider } from "./data/SubmissionContext";
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Grid, Container } from "@mui/material"


function App() {
  return (
    <SubmissionsProvider>
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Form />
          </Grid>
          <Grid item xs={12} md={6}>
            <SubmissionsList />
          </Grid>
        </Grid>
      </Container>
    </SubmissionsProvider>
  );
}

export default App;
