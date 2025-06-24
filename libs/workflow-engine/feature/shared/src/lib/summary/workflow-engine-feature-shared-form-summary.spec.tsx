import { render } from '@testing-library/react';

import WorkFlowEngineFeatureSharedFormSummary from './workflow-engine-feature-shared-form-summary';

describe('WorkFlowEngineFeatureSharedFormSummary', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WorkFlowEngineFeatureSharedFormSummary />);
    expect(baseElement).toBeTruthy();
  });
});
