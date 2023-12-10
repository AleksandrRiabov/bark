import { Box, Container, Typography } from "@mui/material";
import HomePageHeader from "./HomePageHeader";
import ThumbnailsList from "./ThumbnailsList";
import HorizontalList from "../../components/HorizontalList";
import BrandsLine from "../../components/BrandsLine";
import StatsLine from "../../components/StatsLine";
import GridLayOut from "./GridLayOut";

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
        <StatsLine />
        <ThumbnailsList />
      </Box>
      <BrandsLine />
      <Box sx={{ background: "#23577c", paddingBottom: "40px" }}>
        <Container>
          <Typography
            variant="h4"
            color="#fff"
            sx={{ padding: "40px 0 0 10px" }}
          >
            Categories
          </Typography>
          <GridLayOut />
        </Container>
      </Box>
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