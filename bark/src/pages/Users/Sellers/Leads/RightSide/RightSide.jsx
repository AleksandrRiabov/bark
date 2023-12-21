import PropTypes from "prop-types";
import { Box, Button, Divider, Typography } from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import ResponseCountBox from "./ResponseCountBox";
import FlexBetween from "../../../../../components/FlexBetween";
import CostBox from "./costBox";
import QuestionAnswer from "./QuestionAnswer";
import WestIcon from "@mui/icons-material/West";

const RightSide = ({
  name,
  service,
  location,
  remote,
  phone,
  email,
  verified,
  responses,
  details,
  setDetailsOpened,
}) => {
  return (
    <Box sx={{ p: { xs: 3, md: 7 } }}>
      <Box
        onClick={() => setDetailsOpened(false)}
        sx={{
          display: { xs: "flex", md: "none" },
          gap: 1,
          pt: 2,
          mb: 4,
          cursor: "pointer",
        }}
      >
        <WestIcon sx={{ color: "text.main" }} size="small" />{" "}
        <Typography variand="subtitle1" color="text.main">
          Back to List
        </Typography>
      </Box>
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
        <Box display="flex" gap={2} pt={2}>
          <Button variant="contained" size="large">
            Contact {name}
          </Button>
          <Button size="large">Not Interested</Button>
        </Box>
        <Box pt={4}>
          <Typography variant="h6">Details</Typography>
          <Divider />
          <Box>
            {details.map(({ question, answer }, index) => (
              <QuestionAnswer key={index} question={question} answer={answer} />
            ))}
          </Box>
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
  details: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired,
    })
  ).isRequired,
  setDetailsOpened: PropTypes.func.isRequired,
};

export default RightSide;
