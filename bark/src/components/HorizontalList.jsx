import { Box, Button, Container, Typography } from "@mui/material";
import CategoryCard from "./CategoryCard";

const HorizontalList = () => {
  return (
    <Container>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h5">Category</Typography>
        <Button>View More</Button>
      </Box>
      <Box sx={{ position: "relative" }}>
        <Box sx={{ overflowX: "auto" }}>
          <Box sx={{ display: "flex", width: "max-content" }}>
            <Box sx={{ marginRight: 2 }}>
              <CategoryCard />
            </Box>
            <Box sx={{ marginRight: 2 }}>
              <CategoryCard />
            </Box>
            <Box sx={{ marginRight: 2 }}>
              <CategoryCard />
            </Box>
            <Box sx={{ marginRight: 2 }}>
              <CategoryCard />
            </Box>
            <Box sx={{ marginRight: 2 }}>
              <CategoryCard />
            </Box>
          </Box>
        </Box>
        {/* Add a pseudo-element for the color transition on the last element */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "20px", // Adjust the width of the color transition
            height: "100%",
            background:
              "linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1))",
            pointerEvents: "none",
          }}
        />
      </Box>
    </Container>
  );
};

export default HorizontalList;
