import { useContext } from "react"
import { SubmissionsContext } from "../../data/SubmissionContext"
import { Grid, Card, CardContent, CardMedia, Typography, Box } from '@mui/material';

const SubmissionsList = () => {
  const { submissions } = useContext(SubmissionsContext);

  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Past Submissions
      </Typography>
      <Grid container spacing={2}>
        {submissions.map((submission) => (
          <Grid item xs={12} sm={6} md={4} key={submission.id}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image={submission.logo || "default_logo_path.jpg"} // Consider providing a default image path
                alt="Company Logo"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {submission.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <strong>Size:</strong> {submission.telescopeSize}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <strong>Budget:</strong> {submission.budget}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <strong>Features:</strong> {submission.features.join(', ')}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default SubmissionsList;