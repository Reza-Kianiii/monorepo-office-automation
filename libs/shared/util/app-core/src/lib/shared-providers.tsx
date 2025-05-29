import { PropsWithChildren } from 'react';
import { CssBaseline, CssVarsTheme } from '@mui/material';
import { Store } from '@reduxjs/toolkit';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
import { ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';

const cacheRtl = createCache({
  key: 'data-grid-rtl-demo',
  stylisPlugins: [prefixer, rtlPlugin],
});

export function SharedProviders({
  theme,
  children,
  store,
}: PropsWithChildren & { theme: CssVarsTheme; store: Store }) {
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <CssBaseline />
          {children}
        </Provider>
      </ThemeProvider>
    </CacheProvider>
  );
}
