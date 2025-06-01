import { render } from '@testing-library/react';

import WorkFlowEngineFeatureInboxProcessMaker from './workflow-engine-feature-inbox-processMaker';

describe('WorkFlowEngineFeatureInboxProcessMaker', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WorkFlowEngineFeatureInboxProcessMaker />);
    expect(baseElement).toBeTruthy();
  });
});
