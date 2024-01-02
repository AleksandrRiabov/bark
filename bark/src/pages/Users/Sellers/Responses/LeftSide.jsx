import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import FlexBetween from "../../../../components/FlexBetween";
import FilterListIcon from "@mui/icons-material/FilterList";
import Message from "./Message";
import Response from "./Response";
import FiltersSideBar from "../FiltersSideBar";
import { useState } from "react";

const filterOptions = [
  { id: "No answer", label: "No answer" },
  { id: "Started", label: "Started" },
  // Add more items as needed
];

const LeftSide = ({
  value,
  setValue,
  responses,
  handleApplyFilters,
  handleSelect,
}) => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const hired = responses.filter((response) => response.status === "hired");
  const pending = responses.filter((response) => response.status === "pending");

  return (
    <Box
      sx={{ minWidth: { md: "400px" }, width: "100%", position: "relative" }}
    >
      <FiltersSideBar
        isDrawerOpen={isDrawerOpen}
        setDrawerOpen={setDrawerOpen}
        items={filterOptions}
        handleApplyFilters={handleApplyFilters}
      />
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
              background: (theme) => theme.palette.primary.lightGreen,
            }}
          >
            <TabList onChange={handleChange}>
              <Tab
                label={
                  <Box display="flex" alignItems="center" gap={1}>
                    <FiberManualRecordIcon
                      sx={{ color: value == 1 ? "red" : "inherit" }}
                    />
                    <Typography>Pending</Typography>
                  </Box>
                }
                value="1"
              />
              <Tab
                label={
                  <Box display="flex" alignItems="center" gap={1}>
                    <CheckCircleIcon
                      fontSize="small"
                      sx={{ color: value == 2 ? "green" : "inherit" }}
                    />
                    <Typography>Hired</Typography>
                  </Box>
                }
                value="2"
              />
            </TabList>
          </Box>
          <Box
            sx={{
              p: 2,
              background: (theme) => theme.palette.primary.grey,
            }}
          >
            <FlexBetween>
              <Typography variant="subtitle1">
                {value == 1
                  ? pending.length
                    ? `${pending.length} pending`
                    : "No pending responses"
                  : hired.length
                  ? `${hired.length} hired`
                  : "No hired responses"}
              </Typography>
              <Box
                display="flex"
                sx={{ color: "text.main", cursor: "pointer" }}
              >
                <FilterListIcon />{" "}
                <Typography
                  variant="subtitle1"
                  pl={1}
                  onClick={handleDrawerOpen}
                >
                  Filter
                </Typography>
              </Box>
            </FlexBetween>
          </Box>
          <TabPanel value="1" sx={{ p: 0 }}>
            {!pending.length ? (
              <Box sx={{ display: { xs: "block", md: "none" } }}>
                <Message value={value} />
              </Box>
            ) : (
              pending.map((res) => (
                <Box key={res.id} onClick={() => handleSelect(res)}>
                  {<Response {...res} />}
                </Box>
              ))
            )}
          </TabPanel>
          <TabPanel value="2" sx={{ p: 0 }}>
            {!hired.length ? (
              <Box sx={{ display: { xs: "block", md: "none" } }}>
                <Message value={value} />
              </Box>
            ) : (
              hired.map((res) => (
                <Box key={res.id} onClick={() => handleSelect(res)}>
                  {<Response {...res} />}
                </Box>
              ))
            )}
          </TabPanel>
        </TabContext>
      </Box>
    </Box>
  );
};

LeftSide.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  responses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      status: PropTypes.oneOf(["pending", "hired"]).isRequired,
      // Add more prop validations as needed
    })
  ).isRequired,
  handleApplyFilters: PropTypes.func.isRequired, // Add this prop validation
};
export default LeftSide;
