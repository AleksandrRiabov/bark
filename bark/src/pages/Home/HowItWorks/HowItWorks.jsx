import { Box, Container, Typography } from "@mui/material";
import StepsMap from "./StepsMap";

import dealIcon from "../../../assets/deal.svg";

const HowItWorks = () => {
  return (
    <Box sx={{ background: "#23577c", padding: "4rem 0" }}>
      <Container>
        <Box sx={{ position: "relative" }}>
          <Typography variant="h4" color="#fff" mb={8}>
            How It Works?
          </Typography>
          <StepsMap />
          <Box
            sx={{
              position: "absolute",
              content: "''",
              width: "220px",
              height: "220px",
              background: "#98d0bd",
              top: "0",
              right: "0",
              display: { xs: "none", lg: "flex" },
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "20%",
              zIndex: 5,
            }}
          >
            <img src={dealIcon} alt="" width="80%" />
          </Box>
          <Box
            sx={{
              position: "absolute",
              content: "''",
              width: "220px",
              height: "220px",
              background: "#e3ffe8",
              top: "30px",
              right: "-20px",
              display: { xs: "none", lg: "flex" },
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "20%",
            }}
          ></Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HowItWorks;
