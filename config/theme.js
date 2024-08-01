import { createTheme } from "@mui/material/styles";
import tailwindConfig from "@/tailwind.config";
import { outlinedInputClasses } from "@mui/material";

const {
  theme: {
    extend: { colors },
  },
} = tailwindConfig;

const theme = createTheme({
  palette: {
    primary: {
      main: colors["primary"],
    },
    secondary: {
      main: colors["secondary"],
    },
    tertiary: {
      main: colors["tertiary"],
    },
    error: {
      main: colors["error"],
    },
    text: {
      primary: colors["textPrimary"],
      secondary: colors["textSecondary"],
    },
  },
  typography: {
    fontFamily: "inherit",
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "--TextField-brandBorderColor": " rgba(32, 183, 138, 0.2)",
          "--TextField-brandBorderHoverColor": "rgba(32, 183, 138, 0.8)",
          "--TextField-brandBorderFocusedColor": "rgba(32, 183, 138, 0.1)",
          "& label.Mui-focused": {
            // color: "var(--TextField-brandBorderHoverColor)",
          },
          borderRadius: "10px",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderRadius: "10px",
          backgroundColor: "var(--TextField-brandBorderFocusedColor)",

          borderColor: "var(--TextField-brandBorderFocusedColor)",
        },
        root: {
          [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: "var(--TextField-brandBorderHoverColor)",
          },
          [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: "var(--TextField-brandBorderHoverColor)",
            backgroundColor: "var(--TextField-brandBorderFocusedColor)",
          },
        },
      },
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: {
          color: colors["secondary"],
        },
      },
    },
  },
});

export default theme;
