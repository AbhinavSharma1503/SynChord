import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
  mode: "dark",

  primary: {
    main: "#3B82F6",
  },

  secondary: {
    main: "#F59E0B",
  },

  background: {
    default: "#0F172A",
    paper: "#1E293B",
  },
},

  shape: {
    borderRadius: 16,
  },

  typography: {
    fontFamily: "Roboto, sans-serif",

    h3: {
      fontWeight: 700,
    },

    h4: {
      fontWeight: 600,
    },

    h5: {
      fontWeight: 600,
    },
  },
});

export default theme;