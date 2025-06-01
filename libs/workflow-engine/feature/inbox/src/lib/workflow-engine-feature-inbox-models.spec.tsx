import { render } from '@testing-library/react';

import WorkflowEngineFeatureInboxModels from './workflow-engine-feature-inbox-models';

describe('WorkflowEngineFeatureInboxModels', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WorkflowEngineFeatureInboxModels />);
    expect(baseElement).toBeTruthy();
  });
});
