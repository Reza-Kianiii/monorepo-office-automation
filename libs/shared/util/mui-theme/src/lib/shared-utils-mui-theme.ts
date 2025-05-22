import { createTheme, responsiveFontSizes } from '@mui/material/styles';

export let theme = createTheme({
  typography: {
    fontFamily: 'IRANSansFaNum, serif',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Raleway';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
         
        }
      `,
    },
  },
});
// theme = responsiveFontSizes(theme);

// export function SharedUtilsMuiTheme() {
//   return (
//     <div>
//       <h1>Welcome to SharedUtilsMuiTheme!</h1>
//     </div>
//   );
// }
