import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
import { DashboardFeatureShell } from '@office-automation/dashboard/feature/shell';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { theme } from '@office-automation/shared/util/mui-theme';

const rtlCache = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

const router = createBrowserRouter(
  [
    {
      path: '',
      element: <DashboardFeatureShell />,
      children: [{}],
    },
  ],
  { basename: `/dashboard` }
);

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <CacheProvider value={rtlCache}>
        <CssBaseline />
        <RouterProvider router={router} />
      </CacheProvider>
    </ThemeProvider>
  );
}

export default App;
