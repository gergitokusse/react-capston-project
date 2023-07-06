import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://api.coinranking.com/v2/coins';
const initialState = {
  cryptos: [],
  stats: {},
  title: 'Crypto Trend',
  isLoading: true,
  error: '',
  active: null,
};

export const fetchItem = createAsyncThunk('Items/fetchItem', async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.data;
  } catch (error) {
    throw new Error(error.message);
  }
});

const itemSlice = createSlice({
  name: 'Items',
  initialState,
  reducers: {
    setActiveCoin: (state, action) => {
      state.active = action.payload;
    },
    setTitle: (state, action) => {
      state.title = action.payload;
    },
  },
  extraReducers: (builder) => builder
    .addCase(fetchItem.pending, (state) => {
      state.isLoading = true;
      state.error = '';
    })
    .addCase(fetchItem.fulfilled, (state, action) => {
      state.isLoading = false;
      state.cryptos = action.payload.coins;
      state.stats = action.payload.stats;
      state.error = '';
    })
    .addCase(fetchItem.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    }),
});

export const { setTitle, setActiveCoin } = itemSlice.actions;
export default itemSlice.reducer;
