import {
  Avatar,
  Box,
  Container,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";

const LeadsPage = () => {
  const leads = [
    {
      id: 1,
      customerName: "Jane Doe",
      serviceNeeded: "Web Development",
      location: "New York, USA",
      budget: "$2,000",
      jobDescription: "Build a responsive website for an e-commerce store.",
    },
    {
      id: 2,
      customerName: "John Smith",
      serviceNeeded: "Graphic Design",
      location: "Los Angeles, USA",
      budget: "$1,500",
      jobDescription: "Create a modern and eye-catching logo for a startup.",
    },
    {
      id: 3,
      customerName: "Alice Johnson",
      serviceNeeded: "Social Media Marketing",
      location: "London, UK",
      budget: "$800",
      jobDescription:
        "Run a targeted social media campaign for a small business.",
    },
    {
      id: 4,
      customerName: "Bob Williams",
      serviceNeeded: "Mobile App Development",
      location: "Toronto, Canada",
      budget: "$3,500",
      jobDescription:
        "Develop a cross-platform mobile app for a fitness tracking service.",
    },
    // Add more leads as needed
  ];

  return (
    <Container>
      <Box mt={4}>
        <Paper elevation={3} sx={{ padding: 3 }}>
          <Typography variant="h4" gutterBottom>
            Available Leads
          </Typography>

          {/* Leads List */}
          <List>
            {leads.map((lead) => (
              <div key={lead.id}>
                <ListItem disablePadding>
                  <ListItemAvatar>
                    <Avatar
                      alt={lead.customerName}
                      src={`https://example.com/${lead.customerName}.jpg`}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={lead.customerName}
                    secondary={`${lead.serviceNeeded} - ${lead.location} - Budget: ${lead.budget}`}
                  />
                </ListItem>
                <Typography variant="body2" sx={{ ml: 3 }}>
                  {lead.jobDescription}
                </Typography>
                <Divider />
              </div>
            ))}
          </List>
        </Paper>
      </Box>
    </Container>
  );
};

export default LeadsPage;
