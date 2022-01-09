import { Themes, GeistUIThemes } from '@geist-ui/react';

export const theme: GeistUIThemes = Themes.createFromLight({
  type: 'lightCryptocurrency',
  font: {
    sans: 'Montserrat',
    mono: 'Montserrat',
  },
  palette: {
    selection: 'red',
  },
});
