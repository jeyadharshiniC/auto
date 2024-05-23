// src/components/Footer.js
import React from 'react';
import { Box, Container, Typography, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Button from '@mui/material/Button';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        bgcolor: '#4caf50',
        color: 'white',
        borderTop: '1px solid white',
      }}
    >
      <Container maxWidth="lg" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Box>
          <Typography variant="h6" gutterBottom>
            @eauto
          </Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, a.
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Button variant="outlined" color="inherit" sx={{ mr: 2 }}>
            Sign In
          </Button>
          <IconButton href="#" target="_blank" rel="noopener" aria-label="Facebook">
            <FacebookIcon />
          </IconButton>
          <IconButton href="#" target="_blank" rel="noopener" aria-label="Twitter">
            <TwitterIcon />
          </IconButton>
          <IconButton href="#" target="_blank" rel="noopener" aria-label="Instagram">
            <InstagramIcon />
          </IconButton>
          <IconButton href="#" target="_blank" rel="noopener" aria-label="LinkedIn">
            <LinkedInIcon />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

