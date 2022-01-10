import { configureStore } from '@reduxjs/toolkit';
import theme from '@store/theme/slices';
import coin from '@store/coins/slice';
import { useDispatch } from 'react-redux';
import { whitelabelAPI } from '@services/apis/whitelabel';
import { coinRankingAPI } from '@services/apis/coinranking';
import { rtkQueryErrorLogger } from './middlewares/error';

const configStore = configureStore({
  reducer: {
    [whitelabelAPI.reducerPath]: whitelabelAPI.reducer,
    [coinRankingAPI.reducerPath]: coinRankingAPI.reducer,
    theme,
    coin,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rtkQueryErrorLogger),
});

export type RootState = ReturnType<typeof configStore.getState>;
export type AppDispatch = typeof configStore.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export default configStore;
