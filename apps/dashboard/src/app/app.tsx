import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
import { DashboardFeatureShell } from '@office-automation/dashboard/feature/shell';
import { Provider } from 'react-redux';
import { store } from '@office-automation/dashboard/utils/redux-store';

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
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </CacheProvider>
  );
}

export default App;
