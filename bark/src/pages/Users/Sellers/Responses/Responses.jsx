import { Box } from "@mui/material";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import { useState } from "react";
import { responses } from "./data";

const Responses = () => {
  const [selectedResponse, setSelectedResponse] = useState(responses[0]);
  const [detailsOpened, setDetailsOpened] = useState(false);
  const [value, setValue] = useState("1");

  const handleSelect = (lead) => {
    setSelectedResponse(lead);
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
          responses={responses}
          handleSelect={handleSelect}
          selectResponseId={selectedResponse.id}
          ssetDetailsOpened={setDetailsOpened}
          value={value}
          setValue={setValue}
        />
      </Box>

      {/* Right Side  */}
      <Box
        sx={{
          height: { md: "92vh" },
          position: "relative",
          overflow: { md: "scroll" },
          display: { xs: detailsOpened ? "block" : "none", md: "flex" },
          width: "100%",
        }}
      >
        <RightSide
          {...selectedResponse}
          setDetailsOpened={setDetailsOpened}
          value={value}
        />
      </Box>
    </Box>
  );
};

export default Responses;
