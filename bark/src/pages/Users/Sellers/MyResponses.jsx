import { useState } from "react";
import PropTypes from "prop-types";
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
  Tab,
  Tabs,
  Typography,
} from "@mui/material";

// Sample data for testing
const sampleResponses = [
  {
    id: 1,
    customerName: "John Doe",
    serviceNeeded: "Web Development",
    location: "New York",
  },
  {
    id: 2,
    customerName: "Jane Smith",
    serviceNeeded: "Graphic Design",
    location: "Los Angeles",
  },
  // Add more response data as needed
];

const sampleHiredJobs = [
  {
    id: 101,
    customerName: "Alice Johnson",
    serviceNeeded: "Mobile App Development",
    location: "San Francisco",
  },
  {
    id: 102,
    customerName: "Bob Wilson",
    serviceNeeded: "SEO Optimization",
    location: "Chicago",
  },
  // Add more hired job data as needed
];

const MyResponsesPage = ({
  responses = sampleResponses,
  hiredJobs = sampleHiredJobs,
}) => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  // Custom TabPanel component
  const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
      <div role="tabpanel" hidden={value !== index} {...other}>
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </div>
    );
  };

  return (
    <Container>
      <Box mt={10}>
        <Paper elevation={3} sx={{ padding: 3 }}>
          <Typography variant="h4" gutterBottom>
            Pending & Hired Jobs
          </Typography>

          {/* Tabs */}
          <Tabs value={tabValue} onChange={handleTabChange}>
            <Tab label="Pending" />
            <Tab label="Hired Jobs" />
          </Tabs>

          {/* Responses or Hired Jobs List based on the selected tab */}
          <TabPanel value={tabValue} index={0}>
            <List>
              {responses.map((response) => (
                <div key={response.id}>
                  <ListItem disablePadding>
                    <ListItemAvatar>
                      <Avatar
                        alt={response.customerName}
                        src={`https://example.com/${response.customerName}.jpg`}
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary={response.customerName}
                      secondary={`${response.serviceNeeded} - ${response.location}`}
                    />
                  </ListItem>
                  <Divider />
                </div>
              ))}
            </List>
          </TabPanel>

          <TabPanel value={tabValue} index={1}>
            <List>
              {hiredJobs.map((job) => (
                <div key={job.id}>
                  <ListItem disablePadding>
                    <ListItemAvatar>
                      <Avatar
                        alt={job.customerName}
                        src={`https://example.com/${job.customerName}.jpg`}
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary={job.customerName}
                      secondary={`${job.serviceNeeded} - ${job.location}`}
                    />
                  </ListItem>
                  <Divider />
                </div>
              ))}
            </List>
          </TabPanel>
        </Paper>
      </Box>
    </Container>
  );
};

MyResponsesPage.propTypes = {
  responses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      customerName: PropTypes.string.isRequired,
      serviceNeeded: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
    })
  ).isRequired,
  hiredJobs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      customerName: PropTypes.string.isRequired,
      serviceNeeded: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MyResponsesPage;
