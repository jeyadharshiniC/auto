import React,{useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';

import MenuIcon from '@mui/icons-material/Menu';
// import { useNavigate } from 'react-router-dom';
import logo from './logo.png';


import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material'; 

import { styled, keyframes } from '@mui/system';
import { Box } from '@mui/material'; 


const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;



const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;


const AnimatedAppBar = styled(AppBar)`
  background-color: green;
  animation: ${fadeIn} 1s ease-in-out;
`;

const AnimatedButton = styled(Button)`
  animation: ${slideInLeft} 1s ease-in-out;
  margin-left: 10px;
  &:nth-of-type(1) {
    animation-delay: 0.5s;
  }
  &:nth-of-type(2) {
    animation-delay: 0.7s;
  }
  &:nth-of-type(3) {
    animation-delay: 0.9s;
  }
  &:nth-of-type(4) {
    animation-delay: 1.1s;
  }
  &:hover {
    animation: ${pulse} 0.5s infinite;
  }
`;
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

const Header = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
    }
  };


 
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const s1=()=>{
    scrollToSection('home')
  }
  const s2=()=>{
    scrollToSection('about')
  }
  const s3=()=>{
    scrollToSection('features')
  }
  const s4=()=>{
    scrollToSection('contact')
  }
  const j1 = () => { 
   s1(); 
   handleMenuClose(); 
  };
  const j2 = () => { 
    s2(); 
    handleMenuClose(); 
   };
   const j3 = () => { 
    s3(); 
    handleMenuClose(); 
   };
   const j4 = () => { 
    s4(); 
    handleMenuClose(); 
   };
 

 




  return (
    <AppBar position="sticky" sx={{bgcolor:'green'}}>

    <AnimatedAppBar position="static">
      <Toolbar
      
      >
        
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          
        <img src={logo} alt='logo' height={55} />
        
          
        </Typography>
        {isMobile ? (
          <>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuOpen}
            >
             
            <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
             PaperProps={{
                style: {
                  width: '100vw',
                  height: '100vh',
                  display: 'flex',
                   flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                  backgroundColor: 'rgba(0,0,0,0.9)',
                },
              }}
            >
               <AnimatedButton onClick={j1}  sx={{color:'white',fontWeight:'bold'}}  >Home</AnimatedButton>
             
               <AnimatedButton   onClick={j2} sx={{color:'white',fontWeight:'bold'}} >About</AnimatedButton>
               <AnimatedButton onClick={j3}  sx={{color:'white',fontWeight:'bold'}} >Features</AnimatedButton>
               <AnimatedButton onClick={j4}  sx={{color:'white',fontWeight:'bold'}} >Contact</AnimatedButton>
               <BouncingIcon
          edge="start"
          color='#4caf50'
          aria-label="menu"
          sx={{ mr: 2 }}
        >
              <Button variant="contained" align="center"  sx={{ backgroundColor:'#00a152', ml:15 }}>

              Book a ride
              
            </Button>
            </BouncingIcon >
           
           
            
            </Menu>
          </>
        ):(
        <Box>
          <AnimatedButton color="inherit"  sx={{ mr: 5 }} onClick={() => scrollToSection('home')} >Home</AnimatedButton>
         
          <AnimatedButton color="inherit"  sx={{ mr: 5 }} onClick={() => scrollToSection('about')}>About</AnimatedButton>
         
          <AnimatedButton color="inherit"  sx={{ mr: 5 }}  onClick={() => scrollToSection('features')}>Features</AnimatedButton>
          
         
           <AnimatedButton color="inherit"  sx={{ mr: 5 }}  onClick={() => scrollToSection('contact')}>Contact</AnimatedButton> 
           
       
          <Button variant="contained" align="center"  sx={{ backgroundColor: '#00a152'}}>

              Book a ride
              
            </Button>
            
          
        </Box>
        )}
      </Toolbar>
    </AnimatedAppBar>
    </AppBar>
  );
};

export default Header;
