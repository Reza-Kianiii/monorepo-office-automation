import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { SharedProviders } from '@office-automation/shared/util/app-core';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
import { DashboardFeatureHome } from '@office-automation/dashboard-shell/feature/home';
import { useMemo } from 'react';
import { createSharedTheme } from '@office-automation/shared/util/mui-theme';
import { store } from '@office-automation/dashboard-shell/utils/redux-store';
const rtlCache = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

const router = createBrowserRouter(
  [
    {
      path: '',
      children: [
        {
          path: 'home',
          Component: DashboardFeatureHome,
        },
      ],
    },
  ],
  { basename: `/dashboard-shell` }
);

export function App() {
  const theme = useMemo(() => createSharedTheme(), []);

  return (
    <SharedProviders theme={theme} store={store}>
      <RouterProvider router={router} />
    </SharedProviders>
  );
}

export default App;
