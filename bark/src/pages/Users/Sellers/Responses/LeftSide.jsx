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

const LeftSide = ({ value, setValue, responses }) => {
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const hired = responses.filter((response) => response.status === "hired");
  const pending = responses.filter((response) => response.status === "pending");

  console.log(pending.length);

  return (
    <Box sx={{ minWidth: { md: "400px" } }}>
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
                {value == 1 ? "No pending responses" : "No hired responses"}
              </Typography>
              <Box
                display="flex"
                sx={{ color: "text.main", cursor: "pointer" }}
              >
                <FilterListIcon />{" "}
                <Typography variant="subtitle1" pl={1}>
                  Filter
                </Typography>
              </Box>
            </FlexBetween>
          </Box>
          <TabPanel value="1">
            {!pending.length ? (
              <Box sx={{ display: { xs: "block", md: "none" } }}>
                <Message value={value} />
              </Box>
            ) : (
              pending.map((res) => <Box key={res.id}>{res.name}</Box>)
            )}
          </TabPanel>
          <TabPanel value="2">
            {!hired.length ? (
              <Box sx={{ display: { xs: "block", md: "none" } }}>
                <Message value={value} />
              </Box>
            ) : (
              hired.map((res) => <Box key={res.id}>{res.name}</Box>)
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
};

export default LeftSide;
