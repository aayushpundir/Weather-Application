import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchWeather, setState } from '../features/weather/weatherSlice';
import { Button, TextField, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import '../styles/search.css';

const Search = () => {
  const [city, setCity] = useState('');
  const dispatch = useDispatch();

  const HandleSearch = () => {
    if (city) {
      dispatch(setState(city));
      dispatch(fetchWeather(city));
      setCity('');
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      HandleSearch();
    }
  };

  return (
    <Box display="flex" alignItems="center">
      <TextField
        label="Enter the city"
        variant="outlined"
        fullWidth
        onChange={(e) => setCity(e.target.value)}
        value={city}
        onKeyPress={handleKeyPress}
        InputProps={{
          startAdornment: <SearchIcon />,
        }}
      />
      <Button 
        onClick={HandleSearch} 
        variant="contained" 
        color="primary" 
        sx={{ ml: 2 }}
      >
        Search
      </Button>
    </Box>
  );
}

export default Search;
