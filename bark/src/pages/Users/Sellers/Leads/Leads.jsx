import { Box } from "@mui/material";
import LeftSide from "./LeftSide/LeftSide";
import RightSide from "./RightSide/RightSide";
import { useState } from "react";

import { leads } from "./data";

const LeadsPage = () => {
  const [selectedLead, setSelectedLead] = useState(leads[0]);
  const [detailsOpened, setDetailsOpened] = useState(false);

  const handleSelect = (lead) => {
    setSelectedLead(lead);
    setDetailsOpened(true);
  };

  return (
    <Box sx={{ display: { xs: "block", md: "flex" } }}>
      {/* Left side */}
      <Box
        sx={{
          maxWidth: { md: "400px" },
          height: "92vh",
          position: "relative",
          overflow: "scroll",
          borderRight: (theme) => `2px solid ${theme.palette.primary.main}`,
          display: { xs: detailsOpened ? "none" : "block", md: "block" },
        }}
      >
        <LeftSide
          leads={leads}
          handleSelect={handleSelect}
          selectedLeadId={selectedLead.id}
          ssetDetailsOpened={setDetailsOpened}
        />
      </Box>

      {/* Right Side  */}
      <Box
        sx={{
          height: { md: "92vh" },
          position: "relative",
          overflow: { md: "scroll" },
          display: { xs: detailsOpened ? "block" : "none", md: "block" },
        }}
      >
        <RightSide {...selectedLead} setDetailsOpened={setDetailsOpened} />
      </Box>
    </Box>
  );
};

export default LeadsPage;
