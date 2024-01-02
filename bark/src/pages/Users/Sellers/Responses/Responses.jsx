import { Box } from "@mui/material";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import { useEffect, useState } from "react";
import { responses as data } from "./data";

const Responses = () => {
  const [selectedResponse, setSelectedResponse] = useState({});
  const [detailsOpened, setDetailsOpened] = useState(false);
  const [value, setValue] = useState("1");
  const [responses, setResponses] = useState([]);
  const [filteredResponses, setFilteredResponses] = useState(responses);

  useEffect(() => {
    setResponses(data);
    setFilteredResponses(data);
  }, []);

  const handleSelect = (response) => {
    setSelectedResponse(response);
    setDetailsOpened(true);
    console.log("first");
  };

  const handleApplyFilters = (selected) => {
    const filtered = responses.filter((res) => selected.includes(res.answered));
    if (selected.length) {
      setFilteredResponses(filtered);
    } else setFilteredResponses(responses);
  };

  return (
    <Box sx={{ display: { xs: "block", md: "flex" } }}>
      {/* Left side */}
      <Box
        sx={{
          maxWidth: { md: "400px", width: "100%" },
          height: "92vh",
          position: "relative",
          overflow: "scroll",
          borderRight: (theme) => `2px solid ${theme.palette.primary.main}`,
          display: { xs: detailsOpened ? "none" : "block", md: "block" },
        }}
      >
        <LeftSide
          responses={filteredResponses}
          handleSelect={handleSelect}
          selectResponseId={selectedResponse.id}
          ssetDetailsOpened={setDetailsOpened}
          value={value}
          setValue={setValue}
          handleApplyFilters={handleApplyFilters}
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
