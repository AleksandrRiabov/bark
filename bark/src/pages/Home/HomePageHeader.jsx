import { Box, Typography } from "@mui/material";
import SearchBar from "../../components/SearchBar";
import proccessImg from "../../assets/process.jpeg";

const HomePageHeader = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignContent: "center",
        marginTop: { xs: 2, md: 12 },
      }}
    >
      {/* LEFT Column */}
      <Box sx={{ flex: 1, marginLeft: { md: 1 }, mt: 16 }}>
        <Typography variant="h3" component="h1" mb={2}>
          Find the perfect <br /> professional for you
        </Typography>
        <Typography variant="h4" mb={4} sx={{ color: "text.secondary" }}>
          Get free quotes within minutes
        </Typography>
        <SearchBar />
        <Box
          sx={{ display: "flex", flexDirection: "column", alignItems: "left" }}
        >
          {/* Additional content goes here if needed */}
        </Box>
        <Box py={3}>
          <Typography
            variant="body2"
            sx={{ color: "text.dark", fontWeight: 700 }}
          >
            <span>Popular:</span>
            <span className="cursor-pointer"> House Cleaning</span>,
            <span className="cursor-pointer"> Web Design</span>,
            <span className="cursor-pointer"> Personal Trainers</span>
          </Typography>
        </Box>
      </Box>
      {/* Right Column with img */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: { xs: "center", sm: "flex-end" },
          alignItems: "center",
        }}
      >
        <img src={proccessImg} alt="" width="90%" />
      </Box>
    </Box>
  );
};

export default HomePageHeader;
