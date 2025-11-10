import { render } from '@testing-library/react';

import WorkflowEngineFeatureNewWorkComponent from './workflow-engine-feature-new-work-component';

describe('WorkflowEngineFeatureNewWorkComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WorkflowEngineFeatureNewWorkComponent />);
    expect(baseElement).toBeTruthy();
  });
});
