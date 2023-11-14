import { Box, Container } from "@mui/material";

import HomePageHeader from "./HomePageHeader";

const index = () => {
  return (
    <Container>
      <Box display={"flex"} justifyContent={"center"}>
        <HomePageHeader />
      </Box>
    </Container>
  );
};

export default index;
