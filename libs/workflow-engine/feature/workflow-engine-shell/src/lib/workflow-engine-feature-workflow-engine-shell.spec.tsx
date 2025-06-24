import { render } from '@testing-library/react';

import WorkflowEngineFeatureWorkflowEngineShell from './workflow-engine-feature-workflow-engine-shell';

describe('WorkflowEngineFeatureWorkflowEngineShell', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <WorkflowEngineFeatureWorkflowEngineShell />
    );
    expect(baseElement).toBeTruthy();
  });
});
