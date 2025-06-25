import { render } from '@testing-library/react';

import WorkFlowEngineFeaturePaused from './workflow-engine-feature-paused';

describe('WorkFlowEngineFeaturePaused', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WorkFlowEngineFeaturePaused />);
    expect(baseElement).toBeTruthy();
  });
});
