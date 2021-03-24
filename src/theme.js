// Material UI
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

let theme = createMuiTheme({
  typography: {
    h1: {
      fontSize: 42,
    },
    h2: {
      fontSize: 34,
    },
    h3: {
      fontSize: 27,
    },
    h4: {
      fontSize: 21,
    },
    subtitle1: {
      fontSize: 17,
    },
    body1: {
      fontSize: 14,
    },
    fontFamily: 'Nunito',
  },
  palette: {
    primary: {
      main: '#FF7D00',
    },
    secondary: {
      main: '#F25600',
      butterYellow: '#FFC800',
    },
    accent: {
      teal: '#00B2A9',
      purple: '#911987',
      spiceyRed: '#D90F06',
    },
    system: {
      red: '#C23934',
      blue: '#1589EE',
    },
    grey: {
      black: '#222222',
      grey1: '#484848',
      grey2: '#7D7F7D',
      grey3: '#CDCDCD',
      grey4: '#E6E6E6',
      grey6: '#F2F2F2',
      white: '#FFFFFF',
    },
  },
});

// Adjust font sizes based on the viewport width
theme = responsiveFontSizes(theme);

export default theme;
