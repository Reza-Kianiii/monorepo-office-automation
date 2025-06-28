import { render } from '@testing-library/react';

import WorkFlowEngineFeatureProcessesDialog from './workflow-engine-feature-processes-dialog';

describe('WorkFlowEngineFeatureProcessesDialog', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WorkFlowEngineFeatureProcessesDialog />);
    expect(baseElement).toBeTruthy();
  });
});
