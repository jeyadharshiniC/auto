// src/components/Features.js
import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import SecurityIcon from '@mui/icons-material/Security';
import PaymentIcon from '@mui/icons-material/Payment';

const features = [
  {
    icon: <LocalTaxiIcon sx={{ fontSize: 40, color: '#4caf50' }} />,
    title: "Convenient Rides",
    description: "Book rides easily with just a few taps on your smartphone."
  },
  {
    icon: <SecurityIcon sx={{ fontSize: 40, color: '#4caf50' }} />,
    title: "Safety First",
    description: "Your safety is our priority. All rides are tracked and drivers are verified."
  },
  {
    icon: <PaymentIcon sx={{ fontSize: 40, color: '#4caf50' }} />,
    title: "Multiple Payment Options",
    description: "Pay with cash, card, or digital wallets for your convenience."
  }
];

const Features = () => {
  return (
    <Box
      sx={{
        py: 8,
        bgcolor: '#e8f5e9',
        color: 'black',
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h4" component="h1" gutterBottom align="center" sx={{ color: '#4caf50' }}>
          Our Features
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper elevation={3} sx={{ p: 3, textAlign: 'center', bgcolor: 'white' }}>
                {feature.icon}
                <Typography variant="h6" component="h2" gutterBottom>
                  {feature.title}
                </Typography>
                <Typography variant="body1">
                  {feature.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Features;

