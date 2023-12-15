import PropTypes from "prop-types";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const TestimonialCard = ({ avatarSrc, name, service, text }) => {
  return (
    <Box
      sx={{
        maxWidth: 300,
        margin: 3,
        background: "#23577c",
        color: "#f4f4f4",
      }}
    >
      <Grid container alignItems="center">
        <Grid item>
          <Avatar
            alt={name}
            src={avatarSrc}
            sx={{
              marginRight: 2,
            }}
          />
        </Grid>
        <Grid item xs={9}>
          <Typography variant="h5" color="text.light">
            {name}
          </Typography>
          <Typography variant="subtitle2" color="text.gold">
            {service}
          </Typography>
        </Grid>
      </Grid>
      <Box sx={{ position: "relative", padding: "0.4rem" }}>
        <FormatQuoteIcon
          sx={{
            position: "absolute",
            top: "0",
            left: "-1.3rem",
            color: "text.gold",
          }}
        />
        <Typography variant="body2" sx={{ marginTop: 1 }}>
          {text}
        </Typography>
        <FormatQuoteIcon
          sx={{
            position: "absolute",
            bottom: "0",
            right: "-0.5rem",
            color: "text.gold",
          }}
        />
      </Box>
    </Box>
  );
};

TestimonialCard.propTypes = {
  avatarSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  service: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default TestimonialCard;
