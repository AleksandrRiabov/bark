import PropTypes from "prop-types";
import LocationOn from "@mui/icons-material/LocationOn";
import { Box, Paper, Typography } from "@mui/material";
import FlexBetween from "../../../../components/FlexBetween";

const Response = ({ name, dateHired, lead }) => {
  return (
    <Box>
      <Paper
        sx={{
          p: 3,
          color: "text.main",
          mb: "2px",
          cursor: "pointer",
          borderRadius: 0,
          background: ``,
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
            {dateHired.toLocaleDateString()}
          </Box>
        </FlexBetween>
        <Typography variant="subtitle1">{lead.service}</Typography>

        <Box display="flex" pt={1} pb={2}>
          <LocationOn />{" "}
          <Typography variant="body1"> {lead.location} (Nationwide)</Typography>
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
          {" " + lead.jobDescription}
        </Typography>
      </Paper>
    </Box>
  );
};

Response.propTypes = {
  name: PropTypes.string.isRequired,
  dateHired: PropTypes.string.isRequired,
  lead: PropTypes.shape({
    service: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    jobDescription: PropTypes.string.isRequired,
  }).isRequired,
};

export default Response;
