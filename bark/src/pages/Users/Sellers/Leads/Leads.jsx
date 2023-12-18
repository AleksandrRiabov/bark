import { Box } from "@mui/material";

import { leads } from "./data";

import LeftSide from "./LeftSide/LeftSide";

const LeadsPage = () => {
  return (
    <Box
      sx={{
        maxWidth: "400px",
        height: "92vh",
        position: "relative",
        overflow: "scroll",
      }}
    >
      {/* Left side */}
      <LeftSide leads={leads} />

      {/* Right Side  */}
      <Box></Box>
    </Box>
  );
};

export default LeadsPage;
