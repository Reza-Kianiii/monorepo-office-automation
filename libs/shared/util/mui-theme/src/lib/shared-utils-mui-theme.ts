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
import { Component } from 'react';

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
  // const existingTheme = useTheme();
  const rootElement = document.getElementById('root');
  return responsiveFontSizes(
    extendTheme(
      {
        cssVarPrefix: 'ema',
        direction: 'rtl',
        typography: {
          fontFamily: ['IRANSansFaNum'].join(','),
          htmlFontSize: 14,
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
