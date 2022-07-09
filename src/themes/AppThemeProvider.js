import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { grey, red } from "@mui/material/colors";

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Roboto",
      textTransform: "none",
    },
  },
  palette: {
    primary: {
      main: red[500],
    },
    secondary: {
      main: grey[600],
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        sx: {
          px: 0,
        },

        textTransform: "capitalize",
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "16px",
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          "& .MuiContainer-maxWidthLg": {
            maxWidth: "1350px",
          },
          "& .MuiContainer-maxWidthMd": {
            maxWidth: "1038px",
          },
        },
      },
    },
    // MuiStack: {
    //   defaultProps: {
    //     sx: {
    //       px: 2,
    //       py: 1,
    //     },
    //     spacing: 2,
    //     direction: "row",
    //   },
    // },
    // MuiPaper: {
    //   defaultProps: {
    //     elevation: 0,
    //   },
    // },
    // MuiLink: {
    //   defaultProps: {
    //     sx: {
    //       color: (theme) => theme.palette.primary.main,
    //     },
    //     underline: "none",
    //   },
    // },
    // MuiButton: {
    //   defaultProps: {
    //     size: "small",
    //     p: 0,
    //     disableRipple: true,
    //   },
    //   variant: "text",
    // },
    // MuiTab: {
    //   defaultProps: {
    //     disableRipple: true,
    //   },
    // },
  },
});

const AppThemeProvider = (prop) => {
  return <ThemeProvider theme={theme}> {prop.children} </ThemeProvider>;
};

export default AppThemeProvider;
