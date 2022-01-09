import { configureStore } from '@reduxjs/toolkit';
import { cryptoApi } from '@services/cryptoApi';
import theme from '@store/theme/slices';
import coin from '@store/coins/slice';
export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    theme,
    coin,
  },
});
