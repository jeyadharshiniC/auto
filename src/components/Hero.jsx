// src/components/Hero.js
import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';

const Hero = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundImage: 'url(https://images.unsplash.com/photo-1589712701903-f63c7452ccf4?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1,
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: -1,
        },
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to @eauto
        </Typography>
        <Typography variant="h5" component="p" gutterBottom>
          Reliable, safe, and affordable rides at your fingertips.
        </Typography>
        <Button variant="contained" size="large" sx={{ mt: 2, backgroundColor: '#4caf50', color: 'white' }}>
          Book a Ride
        </Button>
      </Container>
    </Box>
  );
};

export default Hero;


