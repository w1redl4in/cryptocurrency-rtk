import { createSlice } from '@reduxjs/toolkit';

interface CoinState {
  coinDetailsModalIsOpen: boolean;
}

const initialState = {
  coinDetailsModalIsOpen: false,
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
  },
});
export const { openModal, closeModal } = coinSlice.actions;
export default coinSlice.reducer;
