import { createSlice } from '@reduxjs/toolkit';

interface CoinState {
  coinDetailsModalIsOpen: boolean;
  coin: any;
}

const initialState = {
  coinDetailsModalIsOpen: false,
  coin: {},
} as CoinState;

const coinSlice = createSlice({
  name: 'coin',
  initialState,
  reducers: {
    openModal(state) {
      state.coinDetailsModalIsOpen = true;
    },
    closeModal(state) {
      state.coinDetailsModalIsOpen = false;
    },
    handleSaveModalCoin(state, { payload }) {
      const { coinUuid, coins } = payload;
      state.coin = coins.find((coin) => coin.uuid === coinUuid);
      state.coinDetailsModalIsOpen = true;
    },
  },
});
export const { openModal, closeModal, handleSaveModalCoin } = coinSlice.actions;
export default coinSlice.reducer;
