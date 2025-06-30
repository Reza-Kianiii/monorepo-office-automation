import { render } from '@testing-library/react';

import WorkFlowEngineFeatureProcesses from './workflow-engine-feature-processes';

describe('WorkFlowEngineFeatureProcesses', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WorkFlowEngineFeatureProcesses />);
    expect(baseElement).toBeTruthy();
  });
});
