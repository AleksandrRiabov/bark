import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import ResponseCountBox from "./ResponseCountBox";
import FlexBetween from "../../../../../components/FlexBetween";
import CostBox from "./costBox";

const RightSide = ({
  name,
  service,
  location,
  remote,
  phone,
  email,
  verified,
  responses,
}) => {
  return (
    <Box p={7}>
      <Box>
        <FlexBetween>
          <Typography variant="h6">{name}</Typography>
          <Typography variant="subtitle1" color="text.secondary">
            4h ago
          </Typography>
        </FlexBetween>
        <Typography variant="h6">{service}</Typography>
        <Typography variant="h6">{location} (Nationwide)</Typography>
        {remote && (
          <Typography variant="body1" color="text.secondary">
            Happy to receive service online or remotely
          </Typography>
        )}
        <Box display="flex" gap={1} alignItems="center" pt={2}>
          <LocalPhoneIcon /> <Typography variant="h6">{phone}</Typography>
          <Typography
            sx={{
              background: (theme) => theme.palette.primary.main,
              padding: "0 6px",
              borderRadius: "10px",
              color: "text.gold",
            }}
          >
            {verified ? "Verified" : "Not Verified"}
          </Typography>
        </Box>
        <Box display="flex" gap={1} alignItems="center" pt={2}>
          <EmailIcon /> <Typography variant="h6">{email}</Typography>
        </Box>
        <ResponseCountBox count={responses} />
        <Box mt={3} mb={3}>
          <CostBox cost={33} />
        </Box>
      </Box>
    </Box>
  );
};

RightSide.propTypes = {
  name: PropTypes.string.isRequired,
  service: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  remote: PropTypes.bool,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  verified: PropTypes.bool,
  responses: PropTypes.number.isRequired,
};

export default RightSide;
