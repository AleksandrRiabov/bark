import { Box, Typography } from "@mui/material";
import SearchBar from "../../components/SearchBar";

const HomePageHeader = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        marginTop: { xs: 2, md: 12 },
      }}
    >
      <Box>
        <Box>
          <Typography variant="h3" component="h1" sx={{ marginBottom: 1 }}>
            Find the perfect <br /> professional for you
          </Typography>
          <Typography
            variant="h4"
            sx={{ marginBottom: 4, color: "text.secondary" }}
          >
            Get free quotes within minutes
          </Typography>
        </Box>
        <SearchBar />
        <Box
          sx={{ display: "flex", flexDirection: "column", alignItems: "left" }}
        ></Box>
        <Box py={3}>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            <span>Popular:</span>
            <span className="cursor-pointer"> House Cleaning</span>,
            <span className="cursor-pointer"> Web Design</span>,
            <span className="cursor-pointer"> Personal Trainers</span>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePageHeader;
