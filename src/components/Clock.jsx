import React, { useEffect, useState } from 'react';
import { Typography, Box } from '@mui/material';
import '../styles/clock.css';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timerId);
  }, []);

  return (
    <Box display="flex" justifyContent="center" alignItems="center" mb={2}>
      <Typography variant="h5">
        {time.toLocaleTimeString()}
      </Typography>
    </Box>
  );
}

export default Clock;
  