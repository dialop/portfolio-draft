import React from 'react';
import { Button, Typography } from '@mui/material';

function Home() {
  const handleClick = () => {
    alert('Button clicked!');
    // You can add any other functionality you want here
  };

  return (
    <div>
      {/* Use Typography component directly inside the JSX */}
      <Typography variant="h1">Welcome to My App</Typography>
      <Button variant="contained" color="primary" onClick={handleClick}>
        Click Me
      </Button>
    </div>
  );
}

export default Home;
