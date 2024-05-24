import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import { styled, keyframes } from '@mui/system';
import { Box } from '@mui/material';

// Keyframes for animations
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

// Styled components with animations
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

const BouncingIcon = styled(IconButton)`
  animation: ${bounce} 2s infinite;
`;

const Header = () => {
  return (
    <AnimatedAppBar position="static">
      <Toolbar>
        <BouncingIcon
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          
        </BouncingIcon>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          @eauto 
        </Typography>
        <Box>
          <AnimatedButton color="inherit" sx={{ mr: 5 }}>Home</AnimatedButton>
          <AnimatedButton color="inherit"sx={{ mr: 5 }}>About</AnimatedButton>
          <AnimatedButton color="inherit"sx={{ mr: 5 }}>Features</AnimatedButton>
          <AnimatedButton color="inherit"sx={{ mr: 5 }}>Contact</AnimatedButton>
        </Box>
      </Toolbar>
    </AnimatedAppBar>
  );
};

export default Header;
