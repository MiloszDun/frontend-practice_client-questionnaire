import Form from "./components/Form";
import SubmissionsList from "./components/SubmissionsList";
import { SubmissionsProvider } from "./data/SubmissionContext";

function App() {
  return (
    <SubmissionsProvider>
      <Form />
      <SubmissionsList />
    </SubmissionsProvider>
  );
}

export default App;
