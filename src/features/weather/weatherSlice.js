import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = 'bfe3c4cf69fb1a7a6bb5b054302bdb64';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const fetchWeather = createAsyncThunk('weather/fetchWeather', async (city) => {
  const response = await axios.get(`${API_URL}?q=${city}&appid=${API_KEY}`);
  return response.data;
});

const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    city: '',
    data: null,
    status: 'idle',
    error: null,
  },
  reducers: {
    setState: (state, action) => {
      state.city = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setState } = weatherSlice.actions;

export default weatherSlice.reducer;
