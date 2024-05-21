// src/components/Footer.js
import React from 'react';
import { Box, Container, Typography, Grid, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        bgcolor: '#4caf50',
        color: 'white',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom>
              @eauto
            </Typography>
            <Typography variant="body2">
             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem, autem.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom>
              Connect with Us
            </Typography>
            <IconButton href="#" target="_blank" rel="noopener" aria-label="Facebook">
              <FacebookIcon />
            </IconButton>
            <IconButton href="#" target="_blank" rel="noopener" aria-label="Twitter">
              <TwitterIcon />
            </IconButton>
            <IconButton href="https://www.instagram.com/ate.auto/" target="_blank" rel="noopener" aria-label="Instagram">
              <InstagramIcon />
            </IconButton>
            <IconButton href="#" target="_blank" rel="noopener" aria-label="LinkedIn">
              <LinkedInIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;

