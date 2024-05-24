import React from 'react';
import { Container, Grid, Typography, Paper, Box } from '@mui/material';
import { styled, keyframes } from '@mui/system';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import ElectricCarIcon from '@mui/icons-material/ElectricCar';

// Keyframes for animations
const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

// Styled components
const AnimatedPaper = styled(Paper)`
  padding: 20px;
  text-align: center;
  background-color: white;
  color: Black;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: translateY(-5px);
  }
  animation: ${slideInLeft} 1s ease-in-out;
`;

const IconWrapper = styled(Box)`
  margin-bottom: 10px;
  & svg {
    font-size: 50px;
    color: green;
  }
`;

const Feature = ({ icon, title, description }) => (
  <Grid item xs={12} sm={4}>
    <AnimatedPaper elevation={3}>
      <IconWrapper>{icon}</IconWrapper>
      <Typography variant="h6" component="div">
        {title}
      </Typography>
      <Typography variant="body1" component="div">
        {description}
      </Typography>
    </AnimatedPaper>
  </Grid>
);

const FeaturesSection = () => {
  return (
    <Container sx={{ py: 5 }}>
      <Typography variant="h4" component="div" sx={{ mb: 5, textAlign: 'center', color: 'green' }}>
        Our Features
      </Typography>
      <Grid container spacing={3}>
        <Feature
          icon={<DirectionsCarIcon />}
          title="Ride Anywhere"
          description="Get a ride to wherever you need to go with our reliable services."
        />
        <Feature 
          icon={<LocalTaxiIcon />}
          title="Affordable Taxis"
          description="Affordable and convenient taxi services at your fingertips."
        />
        <Feature
          icon={<ElectricCarIcon />}
          title="Eco-Friendly"
          description="Travel in eco-friendly electric cars for a sustainable future."
        />
      </Grid>
    </Container>
  );
};

export default FeaturesSection;