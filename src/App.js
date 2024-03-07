import Form from "./components/Form";
import SubmissionsList from "./components/SubmissionsList";
import { SubmissionsProvider } from "./data/SubmissionContext";
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function App() {
  return (
    <SubmissionsProvider>
      <Form />
      <SubmissionsList />
    </SubmissionsProvider>
  );
}

export default App;
