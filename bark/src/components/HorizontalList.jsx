import { Box, Button, Container, Typography } from "@mui/material";
import CategoryCard from "./CategoryCard";
import PropTypes from "prop-types";

const HorizontalList = ({ category }) => {
  return (
    <Container>
      <Box display="flex" justifyContent="space-between" p={1}>
        <Typography variant="h5">{category.title}</Typography>
        <Button sx={{ color: "text.secondary" }}>View More</Button>
      </Box>
      <Box sx={{ position: "relative" }}>
        <Box sx={{ overflowX: "auto", padding: 1 }}>
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
        {/* Pseudo-element for the color transition on the last element */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "20px", // Adjust the width of the color transition
            height: "100%",
            background:
              "linear-gradient(to right, rgba(255, 255, 255, 0), #98d0bd)",
            pointerEvents: "none",
          }}
        />
      </Box>
    </Container>
  );
};

HorizontalList.propTypes = {
  category: PropTypes.shape({
    title: PropTypes.string.isRequired,
    // Add other properties as needed
  }).isRequired,
};

export default HorizontalList;
