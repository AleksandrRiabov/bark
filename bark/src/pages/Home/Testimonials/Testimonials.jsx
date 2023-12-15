import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    avatarSrc:
      "https://1.img-dpreview.com/files/p/TS1120x1120~forums/59237974/6e191c3c2af142abac5ef4a5371b72a4",
    name: "John Doe",
    service: "Web Development",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  },
  {
    avatarSrc:
      "https://3.bp.blogspot.com/-IpWTaQlkdRA/V2xvthpMsaI/AAAAAAAAEvw/FvgrKfLpr4YFrweSQyf0DgpiJZj2PSrMQCKgB/s1600/DSC_0120.JPG",
    name: "Jane Doe",
    service: "Graphic Design",
    text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    avatarSrc:
      "https://avatars.mds.yandex.net/i?id=6dae7b04537621aed8c69fa25ac1e607_l-7051792-images-thumbs&ref=rim&n=13&w=838&h=838",
    name: "Alice Smith",
    service: "Digital Marketing",
    text: "Ut enim ad minim veniam, quis nostrud exercitation an ullamco laboris. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  },
];

const Testimonials = () => {
  return (
    <Box sx={{ background: "#23577c", padding: "4rem 0" }}>
      <Container>
        <Box>
          {" "}
          <Typography variant="h4" color="#fff">
            {" "}
            What People Say About Us
          </Typography>
        </Box>
        <Box pt="3rem">
          <Grid container justifyContent="center" spacing={2}>
            {testimonials.map((testimonial, index) => (
              <Grid item key={index}>
                <TestimonialCard {...testimonial} />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Divider
          sx={{
            width: "34%",
            margin: "2rem auto",
            backgroundColor: "text.light",
            display: { xs: "none", lg: "block" },
          }}
        />
      </Container>
    </Box>
  );
};

export default Testimonials;
