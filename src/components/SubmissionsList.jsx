import { useContext, useState } from "react"
import { SubmissionsContext } from "../data/SubmissionContext"

export const SubmissionsList = () => {
  const { submissions } = useContext(SubmissionsContext);

  return (
    <div id="submission-list">
      <h2>Past Submissions</h2>
      {submissions.map((submission) => {
        return (
          <div key={submission.id} className="submission-item">
            <img src={submission.logo} alt="Company Logo" className="submission-logo" />
            <div className="submission-name"><span style={{fontWeight: 'bold'}}>Telescope name:</span> {submission.name}</div>
            <div className="submission-telescope"><span style={{fontWeight: 'bold'}}>Size:</span> {submission.telescopeSize}</div>
            <div className="submission-budget"><span style={{fontWeight: 'bold'}}>Budget:</span> {submission.budget}</div>
            <div className="submission-features"><span style={{fontWeight: 'bold'}}>Features:</span> {submission.features.join(', ')}</div>
          </div>
        )})}
    </div>
  )
}
