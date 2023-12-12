import { Box, Container, Typography } from "@mui/material";
import trustedProff from "../../assets/training.svg";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";

const TrustedProffesionals = () => {
  return (
    <Box sx={{ padding: "4rem 0" }}>
      <Container>
        <Typography variant="h4">Trusted Professionals</Typography>
        <Box display="flex" sx={{ padding: "2rem 0" }}>
          {/* Left side */}
          <Box display="flex" justifyContent="center" alignItems="center">
            <img src={trustedProff} alt="" width="80%" />
          </Box>
          {/* Right Side */}
          <Box
            display="flex"
            alignItems="center"
            flexDirection="column"
            justifyContent="center"
          >
            <Box>
              <Typography variant="h4" color="text.dark" mb={2}>
                <DoneOutlineIcon sx={{ color: "text.gold" }} /> Rigorous Testing
              </Typography>
              <Typography variant="h6" mb={6} color="text.main">
                Our professionals undergo thorough testing to ensure their
                expertise and reliability in handling tasks.
              </Typography>
            </Box>
            <Box>
              <Typography variant="h4" mb={2} color="text.dark">
                {" "}
                <DoneOutlineIcon sx={{ color: "text.gold" }} />
                Quality Assurance
              </Typography>
              <Typography variant="h6" color="text.main">
                We maintain high standards by continuously evaluating and
                validating the skills of our professionals.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default TrustedProffesionals;
