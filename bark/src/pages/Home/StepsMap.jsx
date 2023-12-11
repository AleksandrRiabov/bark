import { Box, Container, Typography } from "@mui/material";
import line1 from "../../assets/line1.svg";
import line2 from "../../assets/line2.svg";

const StepsMap = () => {
  return (
    <Box sx={{ background: "#23577c", padding: "4rem 0" }}>
      <Container>
        <Box
          display="flex"
          sx={{
            flexDirection: { xs: "column", md: "row" },
            height: { md: "300px" },
          }}
        >
          {/* Firets  step */}
          <Box
            sx={{
              width: "30%",
              minWidth: "250px",
              maxWidth: "300px",
              position: "relative",
            }}
          >
            <Box
              sx={{
                borderRadius: "50%",
                width: "90px",
                height: "90px",
                background: "#e3ffe8",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mb: 4,
              }}
            >
              <Typography variant="h3" color="text.main">
                1
              </Typography>
            </Box>
            <Box sx={{ position: "relative" }}>
              <Typography variant="h5" color="#fff">
                Create The Task
              </Typography>
              <Typography variant="body" color="text.gold">
                Describe the job you want to be done.
              </Typography>
              {/* Pseudo-element styling */}
              <Box
                component="span"
                sx={{
                  position: "absolute",
                  content: "''",
                  width: "250px",
                  height: "160%",
                  backgroundImage: `url(${line1})`, // Use line1.svg as backgroundImage
                  backgroundSize: "cover", // Adjust as needed
                  top: "-90px",
                  left: "90px",
                  display: { xs: "none", md: "block" },
                }}
              />
            </Box>
          </Box>
          {/* Second Step */}
          <Box
            sx={{
              width: "30%",
              minWidth: "250px",
              maxWidth: "300px",
              position: "relative",
              alignSelf: "flex-end",
            }}
          >
            <Box
              sx={{
                borderRadius: "50%",
                width: "90px",
                height: "90px",
                background: "#e3ffe8",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mb: 4,
                zIndex: 200,
                position: "relative",
              }}
            >
              <Typography variant="h3" color="text.main">
                2
              </Typography>
            </Box>
            <Box sx={{ position: "relative" }}>
              <Typography variant="h5" color="#fff">
                Get the respons
              </Typography>
              <Typography variant="body" color="text.gold">
                Proffesionals will respod to your quote.
              </Typography>
              {/* Pseudo-element styling */}
              <Box
                component="span"
                sx={{
                  position: "absolute",
                  content: "''",
                  width: "250px",
                  height: "160%",
                  backgroundImage: `url(${line2})`, // Use line1.svg as backgroundImage
                  backgroundSize: "cover", // Adjust as needed
                  top: "-180px",
                  left: "70px",
                  display: { xs: "none", md: "block" },
                }}
              />
            </Box>
          </Box>

          {/* Third step */}
          <Box
            sx={{
              width: "30%",
              minWidth: "250px",
              maxWidth: "300px",
              pt: "30px",
            }}
          >
            <Box
              sx={{
                borderRadius: "50%",
                width: "90px",
                height: "90px",
                background: "#e3ffe8",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mb: 4,
                zIndex: 200,
                position: "relative",
              }}
            >
              <Typography variant="h3" color="text.main">
                3
              </Typography>
            </Box>
            <Box sx={{ position: "relative" }}>
              <Typography variant="h5" color="#fff">
                Pay once done
              </Typography>
              <Typography variant="body" color="text.gold">
                You will pay only when the job done.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default StepsMap;
