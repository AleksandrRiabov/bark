import PropTypes from "prop-types";
import { Box, Paper, Typography } from "@mui/material";
import FlexBetween from "../../../../components/FlexBetween";
import LocationOn from "@mui/icons-material/LocationOn";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

const Lead = ({
  name,
  service,
  location,
  jobDescription,
  responses,
  price,
}) => {
  return (
    <Paper
      sx={{
        p: 3,
        color: "text.main",
        mb: "2px",
        cursor: "pointer",
        borderRadius: 0,
      }}
    >
      <FlexBetween>
        <Typography variant="h6" color="text.dark">
          {name}
        </Typography>
        <Box
          sx={{
            p: 0.5,
            background: (theme) => theme.palette.primary.green,
            borderRadius: 1,
            color: "text.dark",
          }}
        >
          1h ago
        </Box>
      </FlexBetween>
      <Typography variant="subtitle1">{service}</Typography>

      <Box display="flex" pt={1} pb={2}>
        <LocationOn />{" "}
        <Typography variant="body1"> {location} (Nationwide)</Typography>
      </Box>
      <Typography
        sx={{
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          WebkitLineClamp: 2,
        }}
      >
        <Typography
          component="span"
          sx={{ color: "text.gold", fontWeight: "bold" }}
        >
          Additional details /
        </Typography>
        {" " + jobDescription}
      </Typography>
      <FlexBetween pt={3} pb={3}>
        <Box display="flex" gap={1}>
          <MonetizationOnIcon size="small" />
          <Typography variant="body1">{price} credits</Typography>
        </Box>
        {!responses && (
          <Typography variant="caption" fontWeight="bold">
            Be the 1st to respond
          </Typography>
        )}
      </FlexBetween>
    </Paper>
  );
};

Lead.propTypes = {
  name: PropTypes.string.isRequired,
  service: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  jobDescription: PropTypes.string.isRequired,
  responses: PropTypes.bool, // Assuming responses is a boolean
  price: PropTypes.number.isRequired,
};

export default Lead;
