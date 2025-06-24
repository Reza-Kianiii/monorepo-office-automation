import { render } from '@testing-library/react';

import WorkFlowEngineFeatureNewCase from './workflow-engine-feature-new-case-component';

describe('WorkFlowEngineFeatureNewCase', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WorkFlowEngineFeatureNewCase />);
    expect(baseElement).toBeTruthy();
  });
});
