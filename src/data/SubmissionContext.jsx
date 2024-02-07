import { createContext, useState } from 'react';
import { SubmissionData } from './SubmissionData';

export const SubmissionsContext = createContext();

export const SubmissionsProvider = ({ children }) => {
  const [submissions, setSubmissions] = useState(SubmissionData);

  const addSubmission = submission => {
    setSubmissions(prevSubmissions => [...prevSubmissions, submission]);
  };

  return (
    <SubmissionsContext.Provider value={{ submissions, addSubmission }}>
      {children}
    </SubmissionsContext.Provider>
  );
};
