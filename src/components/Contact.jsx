import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import axios from 'axios';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://sheetdb.io/api/v1/4eoyk5kcvn77e', {
        data: formData
      });
      if (response.status === 201) {
        alert('Form submitted successfully');
      } else {
        alert('Error submitting form');
      }
    } catch (error) {
      console.error('There was an error!', error);
      alert('Error submitting form');
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom sx={{mt:4}}>
        Contact Us
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          fullWidth
          margin="normal"
          multiline
          rows={4}
        />
        <Button type="submit" variant="contained"  sx={{ backgroundColor: 'green',mb:2}}>
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default ContactForm;
