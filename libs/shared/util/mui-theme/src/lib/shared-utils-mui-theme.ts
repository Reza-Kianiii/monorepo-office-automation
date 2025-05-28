import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
  useTheme,
} from '@mui/material/styles';
import { faIR } from '@mui/x-data-grid/locales';

import { extendTheme } from '@mui/material/styles';
import { faIR as gridFaIR } from '@mui/x-data-grid-premium/locales';
import { faIR as coreFaIR } from '@mui/material/locale';

const modifiedGridFaIR = gridFaIR;
modifiedGridFaIR.components.MuiDataGrid.defaultProps.localeText.filterValueAny =
  'همه';
modifiedGridFaIR.components.MuiDataGrid.defaultProps.localeText.filterValueTrue =
  'می‌باشد';
modifiedGridFaIR.components.MuiDataGrid.defaultProps.localeText.filterValueFalse =
  'نمی‌باشد';

modifiedGridFaIR.components.MuiDataGrid.defaultProps.localeText.paginationDisplayedRows =
  ({ from, to, count, estimated: est }) => {
    if (!est) {
      return `${from}–${to} از ${count !== -1 ? count : `بیش از ${to}`}`;
    }

    const estLabel = est && est > to ? `حدودا ${est}` : `بیش از ${to}`;
    return `${from}–${to} از ${count !== -1 ? count : estLabel}`;
  };

export function createSharedTheme(): any {
  // Inherit the theme from the docs site (dark/light mode)
  const existingTheme = useTheme();
  const rootElement = document.getElementById('root');
  return responsiveFontSizes(
    extendTheme(
      {
        cssVarPrefix: 'ema',
        direction: 'rtl',
        typography: {
          fontFamily: ['IRANSansFaNum'].join(','),
        },

        components: {
          MuiListSubheader: {
            styleOverrides: {
              root: {
                backgroundColor: 'inherit',
              },
            },
          },
          MuiFormHelperText: {
            styleOverrides: {
              root: {
                marginTop: '2px',
                marginBottom: '1px',
                minHeight: '1em',
                lineHeight: 1,
              },
            },
          },
          MuiTextField: {
            defaultProps: {
              margin: 'normal',
              variant: 'outlined',
              size: 'small',
              InputLabelProps: {
                shrink: true,
              },
            },
            styleOverrides: {
              root: {
                '& input:-webkit-autofill': {
                  boxShadow: '0 0 0 100px white inset',
                  WebkitTextFillColor: '#000',
                },
                marginTop: 0,
                width: 'full',
              },
            },
          },
          MuiInputLabel: {
            defaultProps: {
              shrink: true,
            },
          },
          MuiAutocomplete: {
            styleOverrides: {
              root: {
                '& .MuiInputLabel-root': {
                  background: 'white',
                },
              },
            },
          },
          MuiPopover: {
            defaultProps: {
              container: rootElement,
            },
          },
          MuiPopper: {
            defaultProps: {
              container: rootElement,
            },
          },
          MuiDialog: {
            styleOverrides: {
              root: {
                '& .MuiDialogContent-root': {
                  paddingBottom: 0,
                },
                '& .MuiDialogContentText-root': {
                  marginBottom: '1rem',
                },
              },
            },
            defaultProps: {
              container: rootElement,
            },
          },
          MuiModal: {
            defaultProps: {
              container: rootElement,
            },
          },
          MuiCircularProgress: {
            defaultProps: {
              size: 25,
            },
          },
          MuiFormControl: {
            styleOverrides: {
              root: {
                marginTop: '-1rem',
              },
            },
          },
        },
      },
      modifiedGridFaIR,

      coreFaIR
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
