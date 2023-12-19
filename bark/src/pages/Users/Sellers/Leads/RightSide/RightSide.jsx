import { Box, Typography } from "@mui/material";

import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import ResponseCountBox from "./ResponseCountBox";

const RightSide = () => {
  return (
    <Box p={7}>
      <Box>
        <Typography variant="h6">Name</Typography>
        <Typography variant="h6">Web Design</Typography>
        <Typography variant="h6">London, SE1 (Nationwide)</Typography>
        <Typography variant="body1" color="text.secondary">
          Happy to receive service online or remotely
        </Typography>
        <Box display="flex" gap={1} alignItems="center" pt={2}>
          <LocalPhoneIcon /> <Typography variant="h6">077** ******</Typography>
          <Typography
            sx={{
              background: (theme) => theme.palette.primary.main,
              padding: "0 6px",
              borderRadius: "10px",
              color: "text.gold",
            }}
          >
            Verified
          </Typography>
        </Box>
        <Box display="flex" gap={1} alignItems="center" pt={2}>
          <EmailIcon />{" "}
          <Typography variant="h6">k****n@k********s.com</Typography>
        </Box>
        <ResponseCountBox count={2} />
      </Box>
    </Box>
  );
};

export default RightSide;
