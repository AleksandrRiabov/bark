import { Box, Container } from "@mui/material";
import HomePageHeader from "./HomePageHeader";
import ThumbnailsList from "./ThumbnailsList";
import BrandsLine from "../../components/BrandsLine";
import StatsLine from "../../components/StatsLine";
import HowItWorks from "./HowItWorks/HowItWorks";
import TrustedProffesionals from "./TrustedProffesionals";
import Testimonials from "./Testimonials/Testimonials";

const Index = () => {
  return (
    <Box sx={{ background: "#98d0bd" }}>
      <Container>
        <Box display={"flex"} flexDirection="column" justifyContent={"center"}>
          <HomePageHeader />
        </Box>
      </Container>
      <Box
        sx={{
          position: "relative",
          mt: { xs: 2, sm: 10, md: 6 },
        }}
      >
        <StatsLine />
        <HowItWorks />
        <ThumbnailsList />
      </Box>

      <TrustedProffesionals />
      <Testimonials />
      <BrandsLine />
    </Box>
  );
};

export default Index;
