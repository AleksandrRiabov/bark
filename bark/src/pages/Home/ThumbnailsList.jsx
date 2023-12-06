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
import Slider from "react-slick";
import developer from "../../assets/workers/developer.jpg";
import plumber from "../../assets/workers/plumber1.jpg";
import electrician from "../../assets/workers/electrician.jpg";
import cleaner from "../../assets/workers/cleaner.jpg";

const ThumbnailsList = () => {
  const history = useLocation();
  const sliderRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isLarge = useMediaQuery(theme.breakpoints.between("md", "lg"));

  const slidesToShow = isMobile ? 1 : isMedium ? 2 : isLarge ? 3 : 4;

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

    if (!hoveredIndex && sliderRef.current) {
      sliderInterval = setInterval(() => {
        sliderRef.current.scrollLeft += 1;
      }, 20);
    }

    return () => clearInterval(sliderInterval);
  }, [hoveredIndex]);

  const handleThumbnailClick = (service) => {
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
  ];

  return (
    <Box
      sx={{
        overflowX: "hidden",
        whiteSpace: "nowrap",
        padding: "20px 0px",
        background: "#f4f4f4",
        position: "relative",
      }}
    >
      <Box>
        <Slider {...settings} ref={sliderRef}>
          {services.map((service, index) => (
            <Button
              key={index}
              variant="text"
              fullWidth
              onClick={() => handleThumbnailClick(service.name)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              sx={{
                flex: "0 0 auto",
                marginRight: "8px",
                position: "relative",
                borderRadius: "5px",
                maxWidth: "400px",
                padding: 0,
                transition: "filter 0.3s ease, box-shadow 0.3s ease",
                filter:
                  hoveredIndex === index
                    ? "brightness(70%)"
                    : "brightness(100%)",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <img
                src={service.imageUrl}
                alt={service.name}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "12px",
                  padding: " 8px",
                  userSelect: "none",
                }}
              />
              <Typography
                variant="subtitle2"
                sx={{
                  position: "absolute",
                  top: "14px",
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
