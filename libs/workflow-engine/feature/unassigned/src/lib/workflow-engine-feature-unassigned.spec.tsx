import { render } from '@testing-library/react';

import WorkFlowEngineFeatureUnassigned from './workflow-engine-feature-unassigned';

describe('WorkFlowEngineFeatureUnassigned', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WorkFlowEngineFeatureUnassigned />);
    expect(baseElement).toBeTruthy();
  });
});
