import { createTheme } from '@mui/material/styles';
import palette from './palette';
import typography from './typography';
import components from './components';

const theme = createTheme({

  palette: {
    primary: {
      main: palette.pink[400],
    },

    secondary: {
      main: palette.navyBlue[400],
    },

    text: {
      primary: palette.text.heading,
      secondary: palette.text.body,
    },

    error: {
      main: palette.error.main,
    },

    background: {
      default: palette.common.white,
    },
  },

  typography,

  components,

});

export default theme;