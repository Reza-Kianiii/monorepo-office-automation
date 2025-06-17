import { render } from '@testing-library/react';

import WorkFlowEngineFeatureInboxForm from './workflow-engine-feature-inbox-form';

describe('WorkFlowEngineFeatureInboxForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WorkFlowEngineFeatureInboxForm />);
    expect(baseElement).toBeTruthy();
  });
});
