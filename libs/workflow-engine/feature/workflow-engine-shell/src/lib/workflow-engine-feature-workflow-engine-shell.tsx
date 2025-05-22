import { SharedUiDrawer } from '@office-automation/shared/ui/drawer';

export function WorkflowEngineFeatureWorkflowEngineShell() {
  return (
    <div>
      <SharedUiDrawer
        menu={[
          {
            id: 346,
            route: '',
            title: 'درخواست کالا',
            shouldCreateTable: false,
          },
          {
            id: 405,
            route: '',
            title: 'ورود کالا به کارخانه',
            shouldCreateTable: false,
          },
          {
            id: 406,
            route: '',
            title: 'خروج کالا از کارخانه',
            shouldCreateTable: false,
          },
          {
            id: 407,
            route: '',
            title: 'پیش فاکتور',
            shouldCreateTable: false,
          },
        ]}
      />
    </div>
  );
}

export default WorkflowEngineFeatureWorkflowEngineShell;
