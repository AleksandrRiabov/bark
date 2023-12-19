import { Box } from "@mui/material";

import { leads } from "./data";

import LeftSide from "./LeftSide/LeftSide";
import RightSide from "./RightSide/RightSide";

const LeadsPage = () => {
  return (
    <Box display="flex">
      {/* Left side */}
      <Box
        sx={{
          maxWidth: "400px",
          height: "92vh",
          position: "relative",
          overflow: "scroll",
        }}
      >
        <LeftSide leads={leads} />
      </Box>
      {/* Right Side  */}
      <Box>
        <RightSide />
      </Box>
    </Box>
  );
};

export default LeadsPage;
