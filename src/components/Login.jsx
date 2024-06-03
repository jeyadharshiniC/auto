import React, { useState } from 'react';
import { Box, Button, Container, CssBaseline, TextField, Typography, Avatar, Link, Paper } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://973272aa.auto-7cl.pages.dev/">
        @e auto
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const LoginPage = () => {
  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');

  const handlePhoneNumberSubmit = (event) => {
    event.preventDefault();
    // Here you would typically send the phone number to your server to generate and send an OTP
    console.log({ phoneNumber });
    setStep(2);
  };

  const handleOtpSubmit = (event) => {
    event.preventDefault();
    // Here you would typically verify the OTP with your server
    console.log({ otp });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Paper elevation={6} sx={{ p: 4, mt: 8, borderRadius: '10px' }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              {step === 1 ? 'Sign in with Phone' : 'Enter OTP'}
            </Typography>
            {step === 1 ? (
              <Box component="form" onSubmit={handlePhoneNumberSubmit} noValidate sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="phoneNumber"
                  label="Phone Number"
                  name="phoneNumber"
                  autoComplete="phone"
                  autoFocus
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Send OTP
                </Button>
              </Box>
            ) : (
              <Box component="form" onSubmit={handleOtpSubmit} noValidate sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="otp"
                  label="OTP"
                  name="otp"
                  autoComplete="one-time-code"
                  autoFocus
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Verify OTP
                </Button>
              </Box>
            )}
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

export default LoginPage;
