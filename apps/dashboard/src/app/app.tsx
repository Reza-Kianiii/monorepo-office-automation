import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
import { DashboardFeatureShell } from '@office-automation/dashboard/feature/shell';

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
          path: '',
          Component: DashboardFeatureShell,
        },
      ],
    },
  ],
  { basename: `/dashboard` }
);

export function App() {
  return (
    <CacheProvider value={rtlCache}>
      <RouterProvider router={router} />
    </CacheProvider>
  );
}

export default App;
