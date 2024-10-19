// src/SignUp.tsx

import React from 'react';
import { TextField, Button, Typography, Container, Paper, Box } from '@mui/material';

const SignUp: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Add your sign-up logic here
    console.log('Sign-up form submitted');
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} sx={{ padding: 4 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Sign Up
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box mb={2}>
            <TextField
              variant="outlined"
              fullWidth
              label="Name"
              required
            />
          </Box>
          <Box mb={2}>
            <TextField
              variant="outlined"
              fullWidth
              label="Email"
              type="email"
              required
            />
          </Box>
          <Box mb={2}>
            <TextField
              variant="outlined"
              fullWidth
              label="Password"
              type="password"
              required
            />
          </Box>
          <Box mb={2}>
            <TextField
              variant="outlined"
              fullWidth
              label="Confirm Password"
              type="password"
              required
            />
          </Box>
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ backgroundColor: 'black', '&:hover': { backgroundColor: '#333' } }}
          >
            Sign Up
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default SignUp;
