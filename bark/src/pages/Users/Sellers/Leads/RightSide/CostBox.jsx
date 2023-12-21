import PropTypes from "prop-types";
import { Box, Tooltip, Typography } from "@mui/material";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import InfoIcon from "@mui/icons-material/Info";

const CostBox = ({ cost }) => {
  return (
    <Box
      sx={{
        background: (theme) => theme.palette.primary.lightGreen,
        p: 2,
        borderRadius: 1,
        display: "flex",
        flexDirection: { xs: "column", lg: "row" },
        gap: 2,
        maxWidth: "720px",
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        gap={1}
        sx={{
          borderBottom: { xs: "1px solid #a0a0a0", lg: 0 },
          borderRight: { xs: "none", lg: "1px solid #a0a0a0" },
          pr: { xs: 0, lg: 2 },
          pb: { xs: 2, lg: 0 },
        }}
      >
        <MonetizationOnIcon />
        <Typography variant="h6"> {cost} credits</Typography>
      </Box>
      <Box>
        <Typography variant="body1">
          Covered by our Get Hired Guarantee
        </Typography>
        <Box display="flex" gap={1}>
          <Typography variant="body1" color="text.secondary">
            If you're not hired during the starter pack, we'll return all the
            credits{" "}
          </Typography>
          <Tooltip title="The starter pack is the only way to get started and trial Bark properly. It provides enough credits to contact roughly 10 customers and is designed so that you get hired at least once and get a great return on your investment. We also offer a massive 20% discount off the standard price.">
            <InfoIcon sx={{ color: "text.main" }} />
          </Tooltip>
        </Box>
      </Box>
    </Box>
  );
};

CostBox.propTypes = {
  cost: PropTypes.number.isRequired,
};

export default CostBox;
