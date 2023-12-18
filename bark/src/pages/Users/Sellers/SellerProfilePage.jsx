import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  LinearProgress,
  Paper,
  Typography,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Link } from "react-router-dom";

const SellerProfilePage = () => {
  return (
    <Container sx={{ mt: 5 }}>
      <Box pb={3}>
        <Typography variant="h6">Hello, Jhon!</Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Monday, 18 Dec 3:11am
        </Typography>
      </Box>
      <Box display="flex" gap={3}>
        {/* Left column */}
        <Box
          flex={1}
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Paper sx={{ p: 2 }}>
            <Box pb={2}>
              <Avatar
                alt="User Avatar"
                src="https://1.img-dpreview.com/files/p/TS1120x1120~forums/59237974/6e191c3c2af142abac5ef4a5371b72a4"
                sx={{ width: 150, height: 150 }}
              />
              <Typography variant="h6">Jhon Doe - Web dev</Typography>
            </Box>
            <Divider />
            <Box display="flex" justifyContent="space-between" pt={2} pb={2}>
              <Typography variant="subtitle1">
                Your Progile is 43% complete
              </Typography>
              <Link to="/seller/dashboard/edit">Edit</Link>
            </Box>
            <LinearProgress
              variant="determinate"
              value={43}
              sx={{ height: 10, borderRadius: 5, mb: 2 }}
            />
            <Typography variant="body2">
              {" "}
              Completing your profile is a great way to appeal to custumers
            </Typography>
          </Paper>
          <Paper sx={{ p: 2 }}>
            <Box>
              <Typography variant="h5" pb={2}>
                Get started
              </Typography>
              <Box sx={{ textAlign: "center", background: "#f9f9fa", p: 2 }}>
                <Typography variant="subtitle1" fontWeight="bold">
                  Starter pack offer
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  Respond up to 10 customers
                </Typography>
                <Typography variant="subtitle1">
                  <span style={{ fontWeight: "bold" }}>20% OFF</span> and{" "}
                  <span style={{ fontWeight: "bold" }}>
                    get hired guarantee
                  </span>
                </Typography>
                <Link to="/#">More info</Link>
              </Box>
            </Box>
          </Paper>
        </Box>

        {/* Middle Column */}
        <Box flex={1}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h5" pt={3} pb={3}>
              Lead settings
            </Typography>
            <Divider />
            <Box display="flex" justifyContent="space-between" pt={3}>
              <Typography variant="h6">Services</Typography>
              <Link to="/seller/dashboard/edit">Edit</Link>
            </Box>
            <Typography variant="subtitle1" color="text.secondary">
              You will receive leads in these categories
            </Typography>
            <Box display="flex" flexWrap="wrap" gap={1} pt={3} pb={3}>
              <Button variant="outlined">Web Development</Button>
              <Button variant="outlined">Web Design</Button>
            </Box>
            <Divider />
            <Box display="flex" justifyContent="space-between" pt={3}>
              <Typography variant="h6">Locations</Typography>
              <Link to="/seller/dashboard/edit">Edit</Link>
            </Box>
            <Typography variant="subtitle1" color="text.secondary">
              You are receiving custumers within
            </Typography>
            <Box display="flex" pt={3} pb={3} alignItems="center">
              <LocationOnIcon sx={{ color: "text.secondary", mr: 1 }} />{" "}
              <Typography variant="h6">50 Miles From ME10 2TG</Typography>
            </Box>
            <Divider />
            <Box pt={3} pb={3}>
              <Typography variant="h6" pb={2}>
                Estimated 23 leads per day
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Sending new leads to
              </Typography>
              <Typography variant="body1" fontWeight="bold">
                email@email.com
              </Typography>
              <Link to="#"> Change</Link>
            </Box>
          </Paper>
        </Box>

        {/* Right Column */}
        <Box
          flex={1}
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          gap="2rem"
        >
          <Paper sx={{ p: 2, flex: 1 }}>
            <Box display="flex" justifyContent="space-between" pt={3} pb={3}>
              <Typography variant="h5">Leads</Typography>
              <Link to="/seller/leads">View</Link>
            </Box>
            <Divider />
            <Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  overflow: "hidden",
                  flexDirection: "column",
                  p: 2,
                }}
              >
                <Box
                  sx={{
                    borderRadius: "50%",
                    background: "#23577c",
                    p: 2,
                    height: "60px",
                    width: "60px",
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center",
                  }}
                >
                  <Typography variant="h5" color="text.light">
                    156
                  </Typography>
                </Box>
                <Typography variant="subtitle1">Leads</Typography>
              </Box>
              <Divider />
              <Typography variant="h6" textAlign="center" pt={2}>
                156 Unread leads
              </Typography>
            </Box>
          </Paper>
          <Paper sx={{ p: 2, flex: 1 }}>
            <Box display="flex" justifyContent="space-between">
              <Typography variant="h5">Responses</Typography>
              <Link to="/seller/responses">View</Link>
            </Box>
            <Divider />
            <Box pt={2} pb={2}>
              <Box sx={{ background: "#f9f9fa", p: 2 }}>
                <Typography variant="body1" textAlign="center">
                  You have not responded to any leads yet
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Box>
      </Box>
    </Container>
  );
};

export default SellerProfilePage;
