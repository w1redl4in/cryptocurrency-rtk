import { createSlice } from '@reduxjs/toolkit';

export interface ThemeState {
  theme: 'light' | 'dark';
}

const initialState = {
  theme: 'light',
} as ThemeState;

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme(state) {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
