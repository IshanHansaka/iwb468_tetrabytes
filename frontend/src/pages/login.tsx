// src/Login.tsx

import React from 'react';
import { TextField, Button, Typography, Container, Paper, Box } from '@mui/material';

const Login: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Add your login logic here
    console.log('Form submitted');
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} sx={{ padding: 4 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleSubmit}>
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
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ backgroundColor: 'black', '&:hover': { backgroundColor: '#333' } }}
          >
            Login
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Login;

