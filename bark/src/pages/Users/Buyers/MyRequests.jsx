import { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";

// Sample data for testing
const sampleRequests = [
  {
    id: 1,
    category: "Web Development",
    description: "Need a website for my business",
    responses: [
      {
        id: 101,
        professional: "John Developer",
        description: "I can help you with the website development",
      },
      {
        id: 102,
        professional: "Jane Coder",
        description: "Experienced web developer at your service",
      },
    ],
  },
  {
    id: 2,
    category: "Graphic Design",
    description: "Design a logo for my startup",
    responses: [
      {
        id: 201,
        professional: "Alice Designer",
        description: "Logo design is my specialty",
      },
      {
        id: 202,
        professional: "Bob Illustrator",
        description: "I can create unique illustrations for your logo",
      },
      // Add more responses as needed
    ],
  },
  // Add more request data as needed
];

const MyRequestsPage = ({ requests = sampleRequests }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleViewProfessionals = (category, responses) => {
    // Handle the action when the "View Professionals" button is clicked
    console.log(`View Professionals for ${category}:`, responses);
  };

  return (
    <Container>
      <Box mt={4}>
        <Typography variant="h4" gutterBottom>
          My Requests
        </Typography>

        {/* Display individual square boxes for each job category */}
        <Grid container spacing={3}>
          {requests.map((request) => (
            <Grid item key={request.id} xs={12} md={6} lg={4}>
              <Paper elevation={3} sx={{ padding: 3, height: "100%" }}>
                <Typography variant="h6" gutterBottom>
                  {request.category}
                </Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  {request.description}
                </Typography>
                <Divider />
                {request.responses.map((response) => (
                  <ListItem key={response.id} disablePadding>
                    <ListItemAvatar>
                      <Avatar
                        alt={response.professional}
                        src={`https://example.com/${response.professional}.jpg`}
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary={response.professional}
                      secondary={response.description}
                    />
                  </ListItem>
                ))}
                <Divider />
                <Button
                  onClick={() =>
                    handleViewProfessionals(request.category, request.responses)
                  }
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  View Professionals
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default MyRequestsPage;
