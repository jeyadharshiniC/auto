// src/components/About.js
import React from 'react';
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
                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum repellendus exercitationem rerum incidunt quae totam doloribus consequatur! Laudantium magnam debitis consequatur eligendi nemo numquam a ratione! Praesentium distinctio quos asperiores, voluptatum perferendis maxime eaque cupiditate, quo ex delectus accusamus labore earum unde, reprehenderit aperiam placeat accusantium quisquam perspiciatis consequuntur similique. Id deserunt ipsam numquam quam!
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 3, bgcolor: '#f1f8e9' }}>
              <Typography variant="h6" component="h2" gutterBottom>
                Our Values
              </Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt culpa consectetur omnis commodi amet similique minima vel ab quibusdam provident, quaerat veritatis maxime, ea soluta error delectus? Expedita ipsam, praesentium, pariatur ducimus repellendus reiciendis numquam quisquam tenetur doloribus exercitationem sunt soluta fugit distinctio quo iste ab. Accusantium culpa blanditiis officia.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={3} sx={{ p: 3, bgcolor: '#f1f8e9' }}>
              <Typography variant="h6" component="h2" gutterBottom>
                About Us
              </Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt alias animi blanditiis, iste, qui corrupti quas impedit illo excepturi a quae culpa autem voluptate. Eos laboriosam esse, aperiam itaque harum reprehenderit sed cumque iure, atque accusamus maxime dolorem culpa doloremque nobis, commodi nihil repellendus assumenda! Excepturi adipisci corporis sequi commodi aliquid tempore repellat dignissimos officiis. Labore est et, cumque necessitatibus molestiae provident deserunt sint delectus alias quasi, illum eaque? Accusamus doloribus rerum iste quae tempore consequatur earum tempora, minus modi nesciunt in voluptatum obcaecati a et hic provident maiores eius molestiae neque. Laborum eum commodi quia animi aliquid molestiae sequi.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;





