import palette from "./palette";

const components = {
  MuiButton: {
    defaultProps: {
      disableElevation: true,
    },
    styleOverrides: {
      root: {
        borderRadius: 12,
        padding: "12px 20px",
        textTransform: "none",
        fontSize: 16,
        fontWeight: 600,
        lineHeight: "20px",
        letterSpacing: "-0.16px",
        boxShadow: "none",
      },

      containedPrimary: {
        backgroundColor: palette.pink[400],
        color: palette.common.white,

        "&:hover": {
          backgroundColor: palette.pink[500],
          boxShadow: "none",
        },
      },

      outlinedPrimary: {
        borderColor: palette.pink[400],
        color: palette.pink[400],
        backgroundColor: "transparent",

        "&:hover": {
          backgroundColor: palette.pink[400],
          color: palette.common.white,
          borderColor: palette.pink[400],
          boxShadow: "none",
        },
      },
    },
  },
};

export default components;
