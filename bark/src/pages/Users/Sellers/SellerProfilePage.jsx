
import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";

const SellerProfilePage = () => {
  return (
    <Container>
      <Box mt={4}>
        <Grid container spacing={3}>
          {/* Left Column: User Avatar */}
          <Grid item xs={12} md={3}>
            <Avatar
              alt="User Avatar"
              src="https://example.com/user-avatar.jpg"
              sx={{ width: 150, height: 150 }}
            />
          </Grid>

          {/* Right Column: User Information */}
          <Grid item xs={12} md={9}>
            <Paper elevation={3} sx={{ padding: 3 }}>
              {/* User Name */}
              <Typography variant="h4" gutterBottom>
                John Doe
              </Typography>

              {/* Bio */}
              <Typography variant="body1" color="textSecondary" gutterBottom>
                Web Developer | UI/UX Enthusiast
              </Typography>

              {/* Additional Information */}
              <Typography variant="body2" color="textSecondary">
                Location: New York, USA
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Joined: January 2022
              </Typography>

              {/* Edit Profile Button */}
              <Button variant="outlined" color="primary" sx={{ mt: 2 }}>
                Edit Profile
              </Button>
            </Paper>
          </Grid>
        </Grid>

        {/* Divider */}
        <Divider sx={{ mt: 3, mb: 3 }} />

        {/* Additional Profile Sections */}
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            {/* Section 1: User Skills, Projects, etc. */}
            <Paper elevation={3} sx={{ padding: 3 }}>
              <Typography variant="h5" gutterBottom>
                Skills & Projects
              </Typography>
              {/* Add content for skills and projects here */}
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            {/* Section 2: Reviews, Ratings, etc. */}
            <Paper elevation={3} sx={{ padding: 3 }}>
              <Typography variant="h5" gutterBottom>
                Reviews & Ratings
              </Typography>
              {/* Add content for reviews and ratings here */}
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default SellerProfilePage;
