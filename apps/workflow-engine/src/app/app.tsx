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
import { useEffect, useMemo, useState } from 'react';
import { SharedProviders } from '@office-automation/shared/util/app-core';
import { WorkFLowEngineFeatureSettingsComponent } from '@office-automation/workflow-engine/feature/settings';
import { WorkFlowEngineFeatureTranking } from '@office-automation/workflow-engine/feature/tracking';
import { WorkFlowEngineFeatureDraft } from '@office-automation/workflow-engine/feature/drafts';
import { WorkFlowEngineFeatureUnassigned } from '@office-automation/workflow-engine/feature/unassigned';
import { WorkFlowEngineFeatureAdvanceSearch } from '@office-automation/workflow-engine/feature/advance-search';

// const rtlCache = createCache({
//   key: 'muirtl',
//   stylisPlugins: [prefixer, rtlPlugin],
// });

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
        {
          path: 'tracking',
          Component: WorkFlowEngineFeatureTranking,
        },
        {
          path: 'settings',
          Component: WorkFLowEngineFeatureSettingsComponent,
        },
        {
          path: 'drafts',
          Component: WorkFlowEngineFeatureDraft,
        },
        {
          path: 'unassigned',
          Component: WorkFlowEngineFeatureUnassigned,
        },
        {
          path: 'advance_search',
          Component: WorkFlowEngineFeatureAdvanceSearch,
        },
      ],
    },
  ],
  { basename: `/workflow-engine` }
);

export function App() {
  const theme = useMemo(() => createSharedTheme(), []);
  const [fake, setFake] = useState();
  useEffect(() => {
    const login = async () => {
      try {
        const response = await fetch(
          'http://172.16.192.214:8010/api/Accounts/Login/',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              AccountID: 3,
              UserName: 'Admin',
              Password: 12345,
              Browser: '',
              IP: '',
            }),
          }
        );

        if (!response.ok) {
          throw new Error('Login failed');
        }

        const data = await response.json();
      } catch (error) {
        console.error('Error during login:', error);
      }
    };

    login();
  }, [fake]);

  return (
    <SharedProviders theme={theme} store={store}>
      <RouterProvider router={router} />
    </SharedProviders>
  );
}
