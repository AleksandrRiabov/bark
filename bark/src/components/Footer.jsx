// Footer.js

import { Container, Grid, Typography, Link, Box } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

const Footer = () => {
  return (
    <Box
      sx={{
        borderTop: "solid 1px #dedede",
        padding: "20px",
        background: "#f4f4f4",
      }}
    >
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              For Customers
            </Typography>
            <div>
              <Link href="/en/gb/">Find a Professional</Link>
            </div>
            <div>
              <Link href="/en/gb/how-it-works/customers/">How it works</Link>
            </div>
            <div>
              <Link href="/en/gb/login/">Login</Link>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              For Professionals
            </Typography>
            <div>
              <Link href="/en/gb/how-it-works/sellers/">How it works</Link>
            </div>
            <div>
              <Link href="/en/gb/sellers/pricing/">Pricing</Link>
            </div>
            <div>
              <Link href="/en/gb/sellers/create/">Join as a Professional</Link>
            </div>
            <div>
              <Link href="/help">Help centre</Link>
            </div>
            <div>
              <Link href="/en/gb/get-the-app/sellers/">Mobile App</Link>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              About
            </Typography>
            <div>
              <Link href="/about">About Bark</Link>
            </div>
            <div>
              <Link href="/careers">Careers</Link>
            </div>
            <div>
              <Link href="/en/gb/affiliates/">Affiliates</Link>
            </div>
            <div>
              <Link href="/blog/" target="_blank">
                Blog
              </Link>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <div>
              <Typography variant="h6">Contact Us</Typography>
              <Link href="bark@gmail.com">team@brrr.com</Link>
              <Link href="tel:+44999999 "> 034 4433 3563</Link>
              <Typography variant="body2" color="textSecondary">
                (open 24 hours a day, 7 days a week)
              </Typography>
            </div>
            <div>
              <Typography variant="h6">Social Media</Typography>
              <Link href="#" target="_blank">
                <TwitterIcon />
              </Link>
              <Link href="#" target="_blank">
                <FacebookIcon />
              </Link>
              <Link href="#" target="_blank">
                <LinkedInIcon />
              </Link>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
