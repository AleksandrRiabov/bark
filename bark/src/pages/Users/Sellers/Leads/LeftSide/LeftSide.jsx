import PropTypes from "prop-types";
import { Box, Button, Typography } from "@mui/material";
import LocationOn from "@mui/icons-material/LocationOn";
import Create from "@mui/icons-material/Create";
import ListAltIcon from "@mui/icons-material/ListAlt";
import FilterListIcon from "@mui/icons-material/FilterList";
import Lead from "./Lead";
import FlexBetween from "../../../../../components/FlexBetween";

const LeftSide = ({ leads, setSelectedLead, selectedLeadId }) => {
  return (
    <Box>
      {/* Header */}
      <Box sx={{ position: "sticky", top: 0 }}>
        <Box
          sx={{
            p: 2,
            background: (theme) => theme.palette.primary.lightGreen,
          }}
        >
          <Typography variant="h5"> 156 matching leads</Typography>
          <Box display="flex" justifyContent="space-between">
            <Box display="flex" alignItems="center">
              <ListAltIcon />
              <Typography variant="body1">2 services</Typography>
              <LocationOn />
              <Typography variant="body1">1location</Typography>
            </Box>
            <Button variant="contained" size="small">
              {" "}
              Edit <Create />{" "}
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            p: 2,
            background: (theme) => theme.palette.primary.grey,
          }}
        >
          <FlexBetween>
            <Typography variant="subtitle1" color="text.secondary">
              Showing all 156 leads
            </Typography>
            <Box display="flex" sx={{ color: "text.main", cursor: "pointer" }}>
              <FilterListIcon />{" "}
              <Typography variant="subtitle1" pl={1}>
                Filter
              </Typography>
            </Box>
          </FlexBetween>
        </Box>
      </Box>

      {/* Leads */}
      <Box>
        {leads.map((lead) => (
          <Box
            key={lead.id}
            sx={
              lead.id === selectedLeadId
                ? { borderLeft: "8px solid orange" }
                : {}
            }
            onClick={() => setSelectedLead(lead)}
          >
            {" "}
            <Lead {...lead} selected={lead.id === selectedLeadId} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

LeftSide.propTypes = {
  leads: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      selected: PropTypes.bool,
    })
  ).isRequired,
  setSelectedLead: PropTypes.func.isRequired,
  selectedLeadId: PropTypes.number,
};

export default LeftSide;
