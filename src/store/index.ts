import { configureStore } from '@reduxjs/toolkit';
import { fetchCoinByUuid, getCoins } from '@services/endpoints';
import theme from '@store/theme/slices';
import coin from '@store/coins/slice';

const configStore = configureStore({
  reducer: {
    [getCoins.reducerPath]: getCoins.reducer,
    [fetchCoinByUuid.reducerPath]: fetchCoinByUuid.reducer,
    theme,
    coin,
  },
});

export type AppState = ReturnType<typeof configStore.getState>;
export default configStore;
