import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import developer from "../../assets/workers/developer.jpg";
import plumber from "../../assets/workers/plumber1.jpg";
import electrician from "../../assets/workers/electrician.jpg";
import cleaner from "../../assets/workers/cleaner.jpg";
import Slider from "react-slick";

const ThumbnailsList = () => {
  const history = useLocation();
  const sliderRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isLarge = useMediaQuery(theme.breakpoints.between("md", "lg"));

  // Adjust slidesToShow based on screen size
  const slidesToShow = isMobile ? 1 : isMedium ? 2 : isLarge ? 3 : 4;

  // Slider settings
  const settings = {
    speed: 3000,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  useEffect(() => {
    let sliderInterval;

    if (!isHovered && sliderRef.current) {
      sliderInterval = setInterval(() => {
        // Auto-scroll the slider to the next position
        sliderRef.current.scrollLeft += 1;
      }, 20);
    }

    // Clear the interval when the component unmounts or when hovered
    return () => clearInterval(sliderInterval);
  }, [isHovered]);

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
    <Box
      sx={{
        overflowX: "hidden", // Hide the horizontal scrollbar
        whiteSpace: "nowrap",
        padding: "60px 20px",
        background: "#e3ffe9",
        position: "relative",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Box>
        <Slider {...settings} ref={sliderRef}>
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
                maxWidth: "450px", // Set the maximum width
                padding: 0,
              }}
            >
              <img
                src={service.imageUrl}
                alt={service.name}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "13px",
                  padding: "0 8px",
                }}
              />
              <Typography
                variant="subtitle2"
                sx={{
                  position: "absolute",
                  top: "6px",
                  left: "15px",
                  color: "text.dark",
                  fontWeight: "bold",
                  background: "#ff9941",
                  padding: "8px",
                  borderRadius: "4px",
                }}
              >
                {`${service.name}:`}
              </Typography>
            </Button>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default ThumbnailsList;
