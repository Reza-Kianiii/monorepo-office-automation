import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { WorkflowEngineFeatureWorkflowEngineShell } from '@office-automation/workflow-engine/feature/workflow-engine-shell';
import { createSharedTheme } from '@office-automation/shared/util/mui-theme';
import { store } from '@office-automation/workflow-engine/utils/redux-store';
import { WorkFlowEngineFeatureInbox } from '@office-automation/workflow-engine/feature/inbox';
import { useEffect, useMemo, useState } from 'react';
import { SharedProviders } from '@office-automation/shared/util/app-core';
import { WorkFLowEngineFeatureSettingsComponent } from '@office-automation/workflow-engine/feature/settings';
import { WorkFlowEngineFeatureTranking } from '@office-automation/workflow-engine/feature/tracking';
import { WorkFlowEngineFeatureDraft } from '@office-automation/workflow-engine/feature/drafts';
import { WorkFlowEngineFeatureUnassigned } from '@office-automation/workflow-engine/feature/unassigned';
import { WorkFlowEngineFeatureAdvanceSearch } from '@office-automation/workflow-engine/feature/advance-search';
import { WorkFlowEngineFeaturePaused } from '@office-automation/workflow-engine/feature/paused';
import { WorkFlowEngineFeatureSelectEngins } from '@office-automation/workflow-engine/feature/select-engins';
import { WorkFlowEngineFeatureProcesses } from '@office-automation/workflow-engine/feature/processes';
import { WorkflowEngineFeatureUserSync } from '@office-automation/workflow-engine/feature/user-sync';
import { WorkFlowEngineFeatureReports } from '@office-automation/workflow-engine/feature/reports';
import { WorkflowEngineFeatureNewWorkComponent } from '@office-automation/workflow-engine/feature/new-work';
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
        {
          path: 'paused',
          Component: WorkFlowEngineFeaturePaused,
        },
        {
          path: 'select_engins',
          Component: WorkFlowEngineFeatureSelectEngins,
        },
        {
          path: 'processes',
          Component: WorkFlowEngineFeatureProcesses,
        },
        {
          path: 'user_sync',
          Component: WorkflowEngineFeatureUserSync,
        },
        {
          path: 'reports',
          Component: WorkFlowEngineFeatureReports,
        },
        {
          path: 'new-work',
          Component: WorkflowEngineFeatureNewWorkComponent,
        },
      ],
    },
  ],
  { basename: `/workflow-engine` }
);

// 'http://172.16.192.214:8010/api/Accounts/Login/';

export function App() {
  const theme = useMemo(() => createSharedTheme(), []);
  const [fake, setFake] = useState();
  useEffect(() => {
    const login = async () => {
      try {
        const response = await fetch(
          'http://localhost:9090/api/Accounts/Login/',
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
