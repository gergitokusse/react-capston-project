import { configureStore } from '@reduxjs/toolkit';
import itemSlice from './Slice/ItemSlice';

const REDUX_DEVTOOLS = true;
const store = configureStore({
  reducer: {
    crypto: itemSlice,
  },
  devTools: REDUX_DEVTOOLS || false,
});

export default store;
