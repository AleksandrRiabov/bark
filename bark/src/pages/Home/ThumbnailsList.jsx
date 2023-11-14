import { Box, Button, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

const ThumbnailsList = () => {
  const history = useLocation();

  const handleThumbnailClick = (service) => {
    // Navigate to the service page or perform any other action
    history.push(`/service/${service}`);
  };

  const services = [
    {
      name: "Programming",
      imageUrl:
        "https://avatars.mds.yandex.net/i?id=582f4d460d0f732ff8de19a6957473de9052e123-8496879-images-thumbs&n=13",
    },
    {
      name: "Plumber",
      imageUrl:
        "https://avatars.mds.yandex.net/i?id=0bd1a04716bf2a88d42190f47387ca04b89a7156-10151263-images-thumbs&n=13",
    },
    {
      name: "Electrician",
      imageUrl:
        "https://avatars.mds.yandex.net/i?id=0a5e68ad575e065a3ee02f06aafcd4422bc66ed9-4519223-images-thumbs&n=13",
    },
    {
      name: "HouseCleaning",
      imageUrl:
        "https://avatars.mds.yandex.net/i?id=514925b2fd0d925cdf691b20e138b65997bfa048-9856531-images-thumbs&n=13",
    },
    {
      name: "Plumber",
      imageUrl:
        "https://avatars.mds.yandex.net/i?id=0bd1a04716bf2a88d42190f47387ca04b89a7156-10151263-images-thumbs&n=13",
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
              background: "rgba(255, 255, 255, 0.3)",
              borderRadius: "5px",
              maxWidth: "350px", // Set the maximum width
              marginTop: index % 2 === 0 ? "30px" : 0, // Adjust marginTop for odd and even thumbnails
            }}
          >
            <img
              src={service.imageUrl}
              alt={service.name}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "10px",
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
