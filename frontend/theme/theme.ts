import { createTheme } from '@mui/material/styles';
import palette from './palette';
import typography from './typography';
import components from './components';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },

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

  components: {
    ...components,

    MuiContainer: {
      defaultProps: {
        maxWidth: "xl", // default container size
      },

      styleOverrides: {
        root: {
          width: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "16px",
          paddingRight: "16px",
        },

        maxWidthSm: {
          maxWidth: "720px", // Tablet
        },

        maxWidthMd: {
          maxWidth: "1140px", // Laptop
        },

        maxWidthLg: {
          maxWidth: "1320px", // Desktop
        },

        maxWidthXl: {
          maxWidth: "1440px", // Large screens
        },
      },
    },
  },
});

export default theme;