// src/components/Features.js
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Slide from '@mui/material/Slide';

const featuresData = [
  {
    title: 'Reliable Rides',
    description: "Reliable Rides with @eauto ensure a safe and dependable travel experience. Our extensive network of drivers and vehicles guarantees timely and efficient service. Whether for daily commutes or special occasions, Ola prioritizes reliability, offering a seamless booking process, real-time tracking, and professional drivers for stress-free journeys every time.",
  },
  {
    title: 'Safety First',
    description: "Safety First - Your safety is our top priority. Our rides adhere to strict safety protocols, including regular vehicle inspections, background checks for drivers, and adherence to hygiene standards. We also provide in-app safety features like SOS buttons and live tracking to ensure a secure and worry-free journey.",
  },
  {
    title: '24/7 Support',
    description: "24/7 Support - @eauto is committed to providing round-the-clock assistance for all your needs. Our dedicated support team is available 24/7 to address any queries, issues, or emergencies. Whether you need help with a booking, have a question, or face an unexpected situation, we're here to support you anytime, anywhere.",
  },
];

const Features = () => {
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeatureIndex((prevIndex) => (prevIndex + 1) % featuresData.length);
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
    py={3} 
    bgcolor= '#4caf50' 
    color= '#4caf50'
    overflow='hidden'
    position='relative'
  >
    <Box sx={{ py: 5, bgcolor: '#e8f5e9', color:'#4caf50' }}>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h2" gutterBottom align="center">
          Our Features
        </Typography>
        <Grid container spacing={4}>
          {featuresData.map((feature, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Slide direction="left" in={index === activeFeatureIndex} mountOnEnter unmountOnExit>
                <Card sx={{ height: '100%' }}>
                  <CardContent>
                    <Typography variant="h6" component="h3" gutterBottom>
                      {feature.title}
                    </Typography>
                    <Typography variant="body2">
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Slide>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
    </Box>
  );
};

export default Features; 






