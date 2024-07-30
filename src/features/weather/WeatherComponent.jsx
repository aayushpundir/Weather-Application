import React from 'react';
import { useSelector } from 'react-redux';
import { Typography, Card, CardContent, CircularProgress, Box } from '@mui/material';
import '../../styles/weather.css';

const WeatherComponent = () => {
  const weather = useSelector((state) => state.weather);
  const city = useSelector((state) => state.weather.city);

  return (
    <Box mt={2}>
      {weather.status === 'loading' && (
        <Box display="flex" justifyContent="center" my={2}>
          <CircularProgress />
        </Box>
      )}
      {weather.status === 'succeeded' && weather.data && (
        <Card>
          <CardContent>
            <Typography variant="h5" component="h2" gutterBottom>
              {city}
            </Typography>
            {weather.data.weather && weather.data.weather[0] && (
              <Typography variant="body1" color="textSecondary">
                {weather.data.weather[0].description}
              </Typography>
            )}
            <Typography variant="body2" color="textSecondary">
              Temperature: {Math.round(weather.data.main.temp - 273.15)}°C
            </Typography>
          </CardContent>
        </Card>
      )}
      {weather.status === 'failed' && (
        <Typography color="error" align="center" my={2}>
          {weather.error}
        </Typography>
      )}
    </Box>
  );
};

export default WeatherComponent;
