import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
  useTheme,
} from '@mui/material/styles';
import { faIR } from '@mui/x-data-grid/locales';

export function createSharedTheme(): any {
  // Inherit the theme from the docs site (dark/light mode)
  const existingTheme = useTheme();
  const rootElement = document.getElementById('root');
  return responsiveFontSizes(
    createTheme(
      {
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
      },
      faIR,
      existingTheme,
      { direction: 'rtl' }
    )
  );
}

// theme = responsiveFontSizes(theme);

// export function SharedUtilsMuiTheme() {
//   return (
//     <div>
//       <h1>Welcome to SharedUtilsMuiTheme!</h1>
//     </div>
//   );
// }
