import { configureStore } from '@reduxjs/toolkit';
import { fetchCoinByUuid, getCoins } from '@services/endpoints';
import theme from '@store/theme/slices';
import coin from '@store/coins/slice';
export default configureStore({
  reducer: {
    [getCoins.reducerPath]: getCoins.reducer,
    [fetchCoinByUuid.reducerPath]: fetchCoinByUuid.reducer,
    theme,
    coin,
  },
});
