import { Box, Container } from "@mui/material";

import HomePageHeader from "./HomePageHeader";
import ThumbnailsList from "./ThumbnailsList";
import HorizontalList from "../../components/HorizontalList";


const index = () => {
  return (
    <>
      <Container>
        <Box display={"flex"} flexDirection="column" justifyContent={"center"}>
          <HomePageHeader />
        </Box>
      </Container>
        <Box mt={20}>
        <ThumbnailsList />
        <HorizontalList />
        </Box>
    </>
  );
};

export default index;
