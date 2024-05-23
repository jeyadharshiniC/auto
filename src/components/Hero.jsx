import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button, Box, Typography } from '@mui/material';

const items = [
  {
    name: "Reliable Rides",
    description: "Get reliable and safe rides with our extensive network of drivers and vehicles.",
    image: "https://images.unsplash.com/photo-1589712701903-f63c7452ccf4?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Safety First",
    description: "Your safety is our priority. We ensure all our rides adhere to strict safety standards.",
    image: "https://sundayguardianlive.com/wp-content/uploads/2018/02/autos%20copy.jpg"
  },
  {
    name: "24/7 Support",
    description: "Our support team is available 24/7 to assist you with any queries or issues.",
    image: ""
  }
];

const HeroSection = () => {
  return (
    <Box sx={{ position: 'relative' }}>
      <Carousel
        animation="slide"
        autoPlay={true}
        indicators={false}
        navButtonsAlwaysVisible={true}
        timeout={30}
        fullHeightHover={false}
        navButtonsProps={{
          style: {
            backgroundColor: 'rgba(0,0,0,0.5)',
            borderRadius: 0
          }
        }}
      >
        {items.map((item, index) => (
          <Paper
            key={index}
            sx={{
              position: 'relative',
              overflow: 'hidden',
              height: '100vh',
              backgroundImage: `url(${item.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'white',
              padding: '0 20px'
            }}
          >
            <Typography variant="h3" component="h2" align="center" gutterBottom>
              {item.name}
            </Typography>
            <Typography variant="h5" component="p" align="center">
              {item.description}
            </Typography>
            <Button variant="contained" sx={{ mt: 4 }}>
              BOOK A RIDE
            </Button>
          </Paper>
        ))}
      </Carousel>
    </Box>
  );
};

export default HeroSection;
