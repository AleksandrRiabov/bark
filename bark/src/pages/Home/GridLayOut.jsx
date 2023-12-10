import {
  Grid,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import developer from "../../assets/workers/developer.jpg";
import plumber from "../../assets/workers/plumber1.jpg";
import electrician from "../../assets/workers/electrician.jpg";
import cleaner from "../../assets/workers/cleaner.jpg";

const GridLayOut = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid container spacing={2} sx={{ margin: "30px 0" }}>
      {/* Left side (takes half of the screen) */}
      <Grid item xs={12} md={6}>
        <Paper
          style={{
            margin: theme.spacing(2),
            textAlign: "center",
            height: "100%",
            background: "none",
          }}
        >
          <img
            src={developer}
            alt="Big Box"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
          {/* Additional content for the big box on the left side */}
        </Paper>
      </Grid>

      {/* Right side (divided into 4 squares, 2 per line) */}
      <Grid item xs={12} md={6} spacing={4} container>
        {[1, 2, 3, 4].map((index) => (
          <Grid key={index} item xs={6} md={6}>
            <Paper
              style={{
                margin: theme.spacing(2),
                textAlign: "center",
                height: "100%",
                background: "none",
              }}
            >
              <img
                src={electrician} // Replace with your right side images URLs
                alt={`Square ${index}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              {/* Additional content for each square on the right side */}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default GridLayOut;
