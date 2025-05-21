import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
// import { WorkFlowFeatureShell } from '@office-automation/workflow-engine/feature/shell';
import { WorkflowEngineFeatureWorkflowEngineShell } from '@office-automation/workflow-engine/feature/workflow-engine-shell';

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
      <CacheProvider value={rtlCache}>
        <RouterProvider router={router} />
      </CacheProvider>
    </div>
  );
}

export default App;
