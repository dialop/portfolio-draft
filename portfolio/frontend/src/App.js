import React from 'react';
import './App.css';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Box, Typography, Button } from '@mui/material';

// import Home from './components/Home'; 
// import Header from './components/Header';

function App() {
  return (
    <Box 
      className="App"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Typography variant="h4" gutterBottom style={{ color: 'white' }}>
        Hello, I'm Diana.
      </Typography>
      <Typography variant="h5" style={{ color: 'white' }}>
        Full Stack Web Developer
      </Typography>
      <Button 
        variant="contained" 
        endIcon={<ArrowDownwardIcon />}
        style={{ marginTop: '20px' }}
      >
        View my work
      </Button>
    </Box>
  );
}

export default App;