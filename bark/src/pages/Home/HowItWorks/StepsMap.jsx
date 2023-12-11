import { Box, Typography } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import ReplyAllIcon from "@mui/icons-material/ReplyAll";
import HandshakeIcon from "@mui/icons-material/Handshake";

import line1 from "../../../assets/line1.svg";
import line2 from "../../../assets/line2.svg";

const StepsMap = () => {
  return (
    <Box
      display="flex"
      sx={{
        flexDirection: { xs: "column", md: "row" },
        height: { md: "300px" },
      }}
    >
      {/* Firets  step */}
      <Box
        sx={{
          width: "30%",
          minWidth: "250px",
          maxWidth: "300px",
          position: "relative",
        }}
      >
        <Box
          sx={{
            borderRadius: "50%",
            width: "90px",
            height: "90px",
            background: "#e3ffe8",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mb: 4,
          }}
        >
          <Typography variant="h3" color="text.main">
            1
          </Typography>
        </Box>
        <Box sx={{ position: "relative" }}>
          <Typography variant="h5" color="#fff">
            Create The Task <CreateIcon />
          </Typography>
          <Typography variant="body" color="text.gold">
            Describe the job you need to be done.
          </Typography>
          {/* Pseudo-element styling */}
          <Box
            component="span"
            sx={{
              position: "absolute",
              content: "''",
              width: "250px",
              height: "160%",
              backgroundImage: `url(${line1})`,
              backgroundSize: "cover",
              top: "-90px",
              left: "90px",
              display: { xs: "none", md: "block" },
            }}
          />
        </Box>
      </Box>
      {/* Second Step */}
      <Box
        sx={{
          width: "30%",
          minWidth: "250px",
          maxWidth: "300px",
          position: "relative",
          alignSelf: "flex-end",
        }}
      >
        <Box
          sx={{
            borderRadius: "50%",
            width: "90px",
            height: "90px",
            background: "#e3ffe8",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mb: 4,
            zIndex: 200,
            position: "relative",
          }}
        >
          <Typography variant="h3" color="text.main">
            2
          </Typography>
        </Box>
        <Box sx={{ position: "relative" }}>
          <Typography variant="h5" color="#fff">
            Receive Responses <ReplyAllIcon />
          </Typography>
          <Typography variant="body" color="text.gold">
            Professionals will respond to your request.
          </Typography>
          {/* Pseudo-element styling */}
          <Box
            component="span"
            sx={{
              position: "absolute",
              content: "''",
              width: "250px",
              height: "150%",
              backgroundImage: `url(${line2})`,
              backgroundSize: "cover",
              top: "-180px",
              left: "70px",
              display: { xs: "none", md: "block" },
            }}
          />
        </Box>
      </Box>

      {/* Third step */}
      <Box
        sx={{
          width: "30%",
          minWidth: "250px",
          maxWidth: "300px",
          pt: "30px",
        }}
      >
        <Box
          sx={{
            borderRadius: "50%",
            width: "90px",
            height: "90px",
            background: "#e3ffe8",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mb: 4,
            zIndex: 200,
            position: "relative",
          }}
        >
          <Typography variant="h3" color="text.main">
            3
          </Typography>
        </Box>
        <Box sx={{ position: "relative" }}>
          <Typography variant="h5" color="#fff">
            Hire the Best Offered <HandshakeIcon />
          </Typography>
          <Typography variant="body" color="text.gold">
            Choose the most suitable professional from the provided options.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default StepsMap;
