import { Box } from "@mui/material";

import Message from "./Message";

const RightSide = ({ value }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Message value={value} />
    </Box>
  );
};

export default RightSide;
