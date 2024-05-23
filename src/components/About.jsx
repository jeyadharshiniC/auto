// src/components/About.js
// import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';

const About = () => {
  return (
    <Box
      sx={{
        py: 8,
        bgcolor: 'white',
        color: 'black',
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h4" component="h1" gutterBottom align="center" sx={{ color: '#4caf50' }}>
          About Us
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 3, bgcolor: '#f1f8e9' }}>
              <Typography variant="h6" component="h2" gutterBottom>
                Our Mission
              </Typography>
              <Typography variant="body1">
              The mission of electric vehicles (EVs) is to revolutionize transportation by significantly reducing greenhouse gas emissions and air pollution, thereby combating climate change and improving public health. EVs aim to enhance energy efficiency and decrease reliance on fossil fuels by promoting the use of renewable energy. They drive technological innovation and economic growth, providing long-term cost savings for consumers. Additionally, EVs support the development of smart cities and sustainable urban mobility solutions, contributing to a cleaner, more efficient, and equitable transportation system for a sustainable future.




              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 3, bgcolor: '#f1f8e9' }}>
              <Typography variant="h6" component="h2" gutterBottom>
                Our Values
              </Typography>
              <Typography variant="body1">
              Our vision transcends mere transportation. We envision a world where mobility is seamless, sustainable, and accessible to all. Through innovative technology and relentless dedication, we aim to redefine the way people move, empowering communities and shaping the future of urban living. With a commitment to environmental stewardship and social responsibility, we strive to create a greener, more inclusive world where every journey is safe, efficient, and enjoyable. Join us on this transformative journey as we revolutionize mobility, driving progress and prosperity for generations to come. Together, let's build a brighter, more connected future for all.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={3} sx={{ p: 3, bgcolor: '#f1f8e9' }}>
              <Typography variant="h6" component="h2" gutterBottom>
                About Us
              </Typography>
              <Typography variant="body1">
              Discover the future of urban mobility with @eauto Electric Autos. Our mission is to revolutionize transportation, offering eco-friendly, affordable, and convenient solutions for city dwellers. Powered by cutting-edge technology and sustainability, our electric autos provide a clean and efficient alternative to traditional petrol vehicles. Embrace convenience without compromising the environment, as we pave the way towards a greener tomorrow. Join us in our journey towards cleaner, smarter, and more accessible transportation options for all, as we strive to make every ride a sustainable and enjoyable experience.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;








