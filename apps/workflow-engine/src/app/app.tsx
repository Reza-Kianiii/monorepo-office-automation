import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';

import { WorkflowEngineFeatureWorkflowEngineShell } from '@office-automation/workflow-engine/feature/workflow-engine-shell';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import {
  createSharedTheme,
  theme,
} from '@office-automation/shared/util/mui-theme';
import { Provider } from 'react-redux';
import { store } from '@office-automation/workflow-engine/utils/redux-store';
import { WorkFlowEngineFeatureInbox } from '@office-automation/workflow-engine/feature/inbox';
import { useMemo } from 'react';

// const rtlCache = createCache({
//   key: 'muirtl',
//   stylisPlugins: [prefixer, rtlPlugin],
// });

const cacheRtl = createCache({
  key: 'data-grid-rtl-demo',
  stylisPlugins: [prefixer, rtlPlugin],
});

const router = createBrowserRouter(
  [
    {
      path: '',
      element: <WorkflowEngineFeatureWorkflowEngineShell />,
      children: [
        {
          path: 'inbox',
          Component: WorkFlowEngineFeatureInbox,
        },
      ],
    },
  ],
  { basename: `/workflow-engine` }
);

export function App() {
  const theme = useMemo(() => createSharedTheme(), []);

  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <CssBaseline />
          <RouterProvider router={router} />
        </Provider>
      </ThemeProvider>
    </CacheProvider>
  );
}
