import { render } from '@testing-library/react';

import WorkflowEngineFeatureUserSync from './workflow-engine-feature-user-sync';

describe('WorkflowEngineFeatureUserSync', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WorkflowEngineFeatureUserSync />);
    expect(baseElement).toBeTruthy();
  });
});
