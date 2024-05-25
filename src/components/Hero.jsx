import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button, Box, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';

import { styled, keyframes } from '@mui/system';

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
`;
const BouncingIcon = styled(IconButton)`
  animation: ${bounce} 2s infinite;
`;

const items = [
  {
    name: "Reliable Rides",
    description: "Get reliable and safe rides with our extensive network of drivers and vehicles.",
    image: "https://lh3.googleusercontent.com/pw/AP1GczOndyYZzdjK0o7kHL_4qp6Qpexkao745PDWa3xMjUKXCOUxB8gJrMnx_llyuUcql5713PYKNLpTgPTDxg1yuq2wKokChe6LOrVd084eGpaIA_AIyeeKJf7hcIJbNQ4VMmUaAruKlKn7MD-T5tp8bcUy=w1391-h928-s-no-gm?authuser=0"
  },
  {
    name: "Safety First", 
    description: "Your safety is our priority. We ensure all our rides adhere to strict safety standards.",
    image:"https://lh3.googleusercontent.com/pw/AP1GczPMD3W8am_KmWsn67qUyddaiCgsDdzA9pCS0ACMcXSKOgqV2q8c1-dXhxV8z8JewrYvJI8lLz9v-Z6eq4X46u95e0MxCUZ7iwmBUzAlPB5W6QJ0yOPhht9ku8mjcfCXwxxS68-1dppyvTdvSavBJM0o=w1391-h928-s-no-gm?authuser=0"
  },
  {
    name: "24/7 Support",
    description: "Our support team is available 24/7 to assist you with any queries or issues.",
    image: "https://lh3.googleusercontent.com/pw/AP1GczNdz38Rg1ip3wMjTJbLe9VsqurnpQyQp3DyYoWJJBFO238bFQ51Dzbjt_x0RrfsU3-mKrhXJ4Pi7JN1N9GwIusbk3uQ-OePhVzlbEUrYc65mRY_BiENK3EnxIYiv_V3X1H1Qj0isj5Qe8rX4fEYI7Mq=w619-h928-s-no-gm?authuser=0"
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
            <Typography variant="h3" component="h2" align="center" gutterBottom sx={{fontFamily:'Playfair Display',color:'yellow',fontWeight:'bold'}}>
              {item.name}
            </Typography>
            <Typography variant="h5" component="p" align="center" sx={{fontFamily:'Lora'}}>
              {item.description}
            </Typography>
            <BouncingIcon
          edge="start"
          color='#4caf50'
          aria-label="menu"
          sx={{ mr: 2 }}
        >
            <Button variant="contained" sx={{ mt: 4 }}>

              BOOK A RIDE
              
            </Button>
            </BouncingIcon>
          </Paper>
        ))}
      </Carousel>
    </Box>
  );
};

export default HeroSection;
