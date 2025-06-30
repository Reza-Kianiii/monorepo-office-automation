import { render } from '@testing-library/react';

import WorkFlowEngineFeatureSelectEnginsDialog from './workflow-engine-feature-select-engins-dialog';

describe('WorkFlowEngineFeatureSelectEnginsDialog', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WorkFlowEngineFeatureSelectEnginsDialog />);
    expect(baseElement).toBeTruthy();
  });
});
