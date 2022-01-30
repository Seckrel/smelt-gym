import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';


// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#c5c7d0',
      contrastText: '#000'
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    h2: {
      fontFamily: [
        '"Permanent Marker"',
        '"cursive"',
        '"Roboto"',
        '"Helvetica"',
      ].join(','),
    },
    h4: {
      fontFamily: [
        "'Gloria Hallelujah'",
        "'cursive'",
        '"Roboto"',
        '"Helvetica"',
      ].join(' ,'),
    }
  },
});

export default theme;