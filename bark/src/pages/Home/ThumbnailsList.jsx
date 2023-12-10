import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import developer from "../../assets/workers/developer.svg";
import plumber from "../../assets/workers/plumber.svg";
import electrician from "../../assets/workers/electrician.svg";
import cleaner from "../../assets/workers/cleaning.svg";

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
            <Link key={index}>
              <Box
                variant="text"
                fullWidth
                onClick={() => handleThumbnailClick(service.name)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                  marginRight: "8px",
                  maxWidth: "400px",
                  padding: 0,
                  transition: "filter 0.3s ease, box-shadow 0.3s ease",
                  filter:
                    hoveredIndex === index
                      ? "brightness(70%)"
                      : "brightness(100%)",
                }}
              >
                <Box display="flex" justifyContent="center">
                  <Box
                    sx={{
                      width: "50%",
                      borderRadius: "50%",
                      overflow: "hidden",
                      background: "#97cfbc",
                    }}
                  >
                    <Box p={4}>
                      <img
                        src={service.imageUrl}
                        alt={service.name}
                        style={{
                          width: "100%",
                          height: "auto",

                          userSelect: "none",
                        }}
                      />
                    </Box>
                  </Box>
                </Box>
                <Typography
                  variant="h6"
                  sx={{
                    color: "text.main",
                    fontWeight: "bold",
                    padding: "8px",
                  }}
                >
                  {`${service.name}:`}
                </Typography>
              </Box>
            </Link>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default ThumbnailsList;
