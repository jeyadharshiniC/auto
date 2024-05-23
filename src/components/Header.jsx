import React from 'react';

import { AppBar, Toolbar, Typography, Button,Box } from '@mui/material';


const Header = () => {
  return (
    <AppBar position="sticky" sx={{ bgcolor: '#4CAF50' }}>
      <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          @eauto
        </Typography>

        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Button color="inherit">Home</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Features</Button>
          <Button color="inherit">Contact</Button>
        </Box>

      </Toolbar>
    </AppBar>
  );
};

export default Header;





