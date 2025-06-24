import { render } from '@testing-library/react';

import WorkFlowEngineFeatureInbox from './workflow-engine-feature-inbox';

describe('WorkFlowEngineFeatureInbox', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WorkFlowEngineFeatureInbox />);
    expect(baseElement).toBeTruthy();
  });
});
