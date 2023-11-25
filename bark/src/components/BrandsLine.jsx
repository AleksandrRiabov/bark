import { Box, Container } from "@mui/material";
import guardianLogo from "../assets/brands/the-guardian.png";

const BrandsLine = () => {
  return (
    <Box sx={{background: '#f9f9fa', padding: 6}}>
      <Container sx={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
        <img src={guardianLogo} alt="logo" width='144px' height='25px'/>
        <img src={guardianLogo} alt="logo" width='144px' height='25px'/>
        <img src={guardianLogo} alt="logo" width='144px' height='25px'/>
        <img src={guardianLogo} alt="logo" width='144px' height='25px'/>
      </Container>
    </Box>
  );
};

export default BrandsLine;
