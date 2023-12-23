import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import noMessage from "../../../../assets/noMessage.svg";
import noJobs from "../../../../assets/noJobs.svg";
import { Link } from "react-router-dom";

const Message = ({ value, ...args }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
      {...args}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          maxWidth: "400px",
          gap: 1,
        }}
      >
        {value == 2 && <Typography variant="h4"> No hires yet?</Typography>}
        <img src={value == 1 ? noMessage : noJobs} alt="" width="40%" />
        {value == 1 && <Typography variant="h4"> No Responses</Typography>}
        <Typography variant="body1" color="text.secondary" textAlign="center">
          {value == 1
            ? "You haven’t responded to any customers yet. When you do, you’ll be able to contact and access their details here."
            : " Update a response as ‘hired’ and you can choose to request a reviewfrom the customer."}
        </Typography>

        <Link to="/sellers/leads">View Leads</Link>
      </Box>
    </Box>
  );
};

Message.propTypes = {
  value: PropTypes.number.isRequired,
  // You can add more prop validations for args if needed
};

export default Message;
