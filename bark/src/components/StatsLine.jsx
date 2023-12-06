import { Box, Container, Typography } from "@mui/material";
import CountUp from "react-countup";
import GroupIcon from "@mui/icons-material/Group";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import WorkIcon from "@mui/icons-material/Work";

const Statistic = ({ num, val = "", text, icon }) => {
  return (
    <Box textAlign="center">
      <Typography variant="h3" color="primary">
        <CountUp end={num} />
        {val && (
          <Typography
            variant="inherit"
            component="span"
            style={{ fontSize: "50%", textTransform: "uppercase" }}
          >
            {val}
          </Typography>
        )}
      </Typography>
      <Typography variant="subtitle" color="#f8992f">
        {text}
      </Typography>
      {icon && <Box mt={1}>{icon}</Box>}
    </Box>
  );
};

const StatsLine = () => {
  return (
    <Box py={8} bgcolor="#f4f4f4">
      <Container>
        <Box display="flex" flexDirection={{ xs: "column", md: "row" }}>
          <Box
            flex={1}
            display="flex"
            justifyContent="space-around"
            flexDirection={{ xs: "column", md: "row" }}
          >
            <Statistic
              num={34252}
              text={"Professionals ready to help you"}
              icon={<GroupIcon color="primary" fontSize="large" />}
            />
            <Statistic
              num={152784}
              text={"Tasks already completed"}
              icon={<AssignmentTurnedInIcon color="primary" fontSize="large" />}
            />
          </Box>
          <Box
            flex={1}
            display="flex"
            justifyContent="space-around"
            flexDirection={{ xs: "column", md: "row" }}
          >
            <Statistic
              num={49}
              val="Minutes"
              text={"Average response time"}
              icon={<AccessTimeIcon color="primary" fontSize="large" />}
            />
            <Statistic
              num={7}
              val="Years"
              text={"Average experience"}
              icon={<WorkIcon color="primary" fontSize="large" />}
            />
            {/* Add more Statistics components as needed */}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default StatsLine;
