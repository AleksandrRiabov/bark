import PropTypes from "prop-types";
import { Box, Tooltip, Typography } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";

const ResponseCountBox = ({ count }) => {
  const responses = new Array(5).fill(null);

  return (
    <Box
      sx={{
        p: 2.5,
        background: "transparent",
        mt: 2,
        display: "flex",
        gap: 2,
        border: (theme) => `1px solid ${theme.palette.primary.green}`,
        borderRadius: 1,
        maxWidth: "470px",
      }}
    >
      <Box display="flex" gap={1}>
        {responses.map((res, index) => (
          <Box
            key={index}
            sx={{
              width: "10px",
              height: "20px",
              background:
                index + 1 <= count
                  ? (theme) => theme.palette.primary.gold
                  : (theme) => theme.palette.primary.grey,
            }}
          ></Box>
        ))}
      </Box>
      <Typography variant="body1">
        {" "}
        {count}/5 professionals have responded
      </Typography>
      <Tooltip title="A maximum of 5 professionals are able to respond to this lead.">
        <InfoIcon sx={{ color: "text.main" }} />
      </Tooltip>
    </Box>
  );
};

ResponseCountBox.propTypes = {
  count: PropTypes.number.isRequired,
};

export default ResponseCountBox;
