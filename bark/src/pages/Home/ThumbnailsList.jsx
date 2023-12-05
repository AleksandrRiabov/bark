import { Box, Button, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import developer from "../../assets/workers/developer.jpg";
import plumber from "../../assets/workers/plumber1.jpg";
import electrician from "../../assets/workers/electrician.jpg";
import cleaner from "../../assets/workers/cleaner.jpg";

const ThumbnailsList = () => {
  const history = useLocation();

  const handleThumbnailClick = (service) => {
    // Navigate to the service page or perform any other action
    history.push(`/service/${service}`);
  };

  const services = [
    {
      name: "Programming",
      imageUrl: developer,
    },
    {
      name: "Plumber",
      imageUrl: plumber,
    },
    {
      name: "Electrician",
      imageUrl: electrician,
    },
    {
      name: "HouseCleaning",
      imageUrl: cleaner,
    },
    {
      name: "Plumber",
      imageUrl: plumber,
    },
    // Add more services as needed
  ];

  return (
    <Box sx={{ overflowX: "auto", whiteSpace: "nowrap" }}>
      <Box sx={{ display: "flex" }}>
        {services.map((service, index) => (
          <Button
            key={index}
            variant="text"
            fullWidth
            onClick={() => handleThumbnailClick(service.name)}
            sx={{
              flex: "0 0 auto",
              marginRight: "8px",
              position: "relative",
              paddingLeft: "16px",
              borderRadius: "5px",
              maxWidth: "350px", // Set the maximum width
              padding: 0,
            }}
          >
            <img
              src={service.imageUrl}
              alt={service.name}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "5px",
              }}
            />
            <Typography
              variant="subtitle2"
              sx={{
                position: "absolute",
                top: "6px",
                left: "15px",
                color: "#fff",
                fontWeight: "bold",
                background: "#4CAF50",
                padding: "8px",
                borderRadius: "4px",
              }}
            >
              {`${service.name}:`}
            </Typography>
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default ThumbnailsList;
