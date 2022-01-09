import { configureStore } from '@reduxjs/toolkit';
import { cryptoApi } from '@services/cryptoApi';
import theme from '@store/theme/slices';
export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    theme,
  },
});
