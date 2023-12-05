import { Box, Container } from "@mui/material";
import HomePageHeader from "./HomePageHeader";
import ThumbnailsList from "./ThumbnailsList";
import HorizontalList from "../../components/HorizontalList";
import BrandsLine from "../../components/BrandsLine";

const Index = () => {
  return (
    <>
      <Container>
        <Box display={"flex"} flexDirection="column" justifyContent={"center"}>
          <HomePageHeader />
        </Box>
      </Container>
      <Box
        sx={{
          position: "relative",
          mt: { xs: 2, sm: 10, md: 6 },
          mb: 10,
        }}
      >
        <ThumbnailsList />
      </Box>
      <BrandsLine />
      <Box mt={10}>
        <HorizontalList category={{ title: "Home & Gardening" }} />
      </Box>
      <Box mt={10} mb={16}>
        <HorizontalList category={{ title: "Business Services" }} />
      </Box>
    </>
  );
};

export default Index;
