// src/components/Contact.js
import React from 'react';
import { Box, Container, Typography, Grid, TextField, Button } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const Contact = () => {
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
          Contact Us
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <EmailIcon sx={{ fontSize: 40, mr: 2, color: '#4caf50' }} />
              <Typography variant="h6" gutterBottom>Email</Typography>
            </Box>
            <Typography variant="body1">support@.com</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <PhoneIcon sx={{ fontSize: 40, mr: 2, color: '#4caf50' }} />
              <Typography variant="h6" gutterBottom>Phone</Typography>
            </Box>
            <Typography variant="body1">+123 456 7890</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>Send us a Message</Typography>
            <form>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <TextField label="Your Name" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField label="Your Email" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Message" variant="outlined" multiline rows={4} fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" size="large" sx={{ bgcolor: '#4caf50', color: 'white' }}>
                    Send
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;


