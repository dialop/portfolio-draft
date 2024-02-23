import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <Box textAlign="center" p={5}>
      {/* Motion to the title for a simple animation */}
      <motion.div
        initial={{ y: -250 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
      >
        <Typography variant="h3" component="h1" gutterBottom>
          Diana Lopez
        </Typography>
      </motion.div>
      
      {/* Subtitle */}
      <Typography variant="h5" component="h2" gutterBottom>
        Full Stack Web Developer
      </Typography>
      
      {/* Animated button */}
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Button variant="contained" color="primary">
          View Projects
        </Button>
      </motion.div>
    </Box>
  );
};

export default Home;
