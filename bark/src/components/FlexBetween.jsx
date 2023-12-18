import PropTypes from "prop-types";
import { Box } from "@mui/material";

const FlexBetween = ({ children, ...props }) => {
  return (
    <Box display="flex" justifyContent="space-between" {...props}>
      {children}
    </Box>
  );
};

FlexBetween.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FlexBetween;
