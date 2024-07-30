import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import Clock from '../components/Clock';
import Search from '../components/Search';
import WeatherComponent from '../features/weather/WeatherComponent';
import { Container, Typography, Box, Paper } from '@mui/material';
import '../styles/app.css';

const App = () => {
  return (
    <Provider store={store}>
      <Container maxWidth="sm" sx={{ pt: 15, pb: 4, }}>
        <Paper 
          elevation={3} 
          sx={{ 
            p: 3, 
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <Typography variant="h4" component="h1" align="center" gutterBottom>
            Weather Forecast
          </Typography>
          <Clock />
          <Box my={3}>
            <Search />
          </Box>
          <WeatherComponent />
        </Paper>
      </Container>
    </Provider>
  );
}

export default App;
