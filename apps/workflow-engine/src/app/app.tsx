import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';

import { WorkflowEngineFeatureWorkflowEngineShell } from '@office-automation/workflow-engine/feature/workflow-engine-shell';
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
      // element: <DashboardFeatureShell />,
      // element: <WorkFlowFeatureShell />,
      // element: <WorkFlowFeatureShell />,
      element: <WorkflowEngineFeatureWorkflowEngineShell />,
      children: [{}],
    },
  ],
  { basename: `/workflow-engine` }
);

export function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CacheProvider value={rtlCache}>
          <CssBaseline />
          <RouterProvider router={router} />
        </CacheProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
