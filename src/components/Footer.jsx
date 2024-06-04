
import React,{useState} from 'react';
import { Box, Container, Typography, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Button from '@mui/material/Button';


import logo from './logo.png';





const Footer =()=>{
  const [showComponents, setShowComponents] = useState(true);
  const handleSignInClick = () => {
    setShowComponents(false);
    window.open('/login', '_blank');
  };
 
  
 

  
  return (
    
    
    <Box
      component="footer"
      sx={{
        py: 4,
        bgcolor: 'green',
        color: 'white',
        borderTop: '1px solid white',
      }}
    >
      <Container maxWidth="lg" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Box>
          <Typography variant="h6" gutterBottom>
          <img src={logo} alt='logo' height={50} />
          </Typography>
         
        </Box>
        {showComponents && (
                <div>
               
                  <section id="home">
                 
                </section>
                <section id="about">
                
                </section>
                <section id="features">
                 
                </section>
                <section id="contact">
                
                </section> 
                
                  <Footer onClick={handleSignInClick} />
                 
                </div>
              )}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
           <Button variant="outlined" onClick={handleSignInClick} color="inherit" sx={{ mr: 2 }}> 
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

