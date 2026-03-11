import palette from "./palette";

const components = {
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: "12px",
        padding: "12px 20px",
        textTransform: "none",
        fontSize: "16px",
        fontWeight: 600,
        lineHeight: "20px",
        letterSpacing: "-0.16px",
        boxShadow: "none",
      },

      containedPrimary: {
        backgroundColor: palette.pink[400],
        color: "#fff",

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
