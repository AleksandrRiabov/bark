import { Box } from "@mui/material";

import { leads } from "./data";

import LeftSide from "./LeftSide/LeftSide";
import RightSide from "./RightSide/RightSide";
import { useState } from "react";

const LeadsPage = () => {
  const [selectedLead, setSelectedLead] = useState(leads[0]);

  selectedLead.id

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
        <LeftSide leads={leads} setSelectedLead={setSelectedLead} selectedLeadId={selectedLead.id} />
      </Box>
      {/* Right Side  */}
      <Box>
        <RightSide {...selectedLead} />
      </Box>
    </Box>
  );
};

export default LeadsPage;
