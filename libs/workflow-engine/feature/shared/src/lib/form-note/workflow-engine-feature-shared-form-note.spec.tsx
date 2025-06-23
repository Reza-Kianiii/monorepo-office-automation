import { render } from '@testing-library/react';

import WorkFlowEngineFeatureSharedFormNote from './workflow-engine-feature-shared-form-note';

describe('WorkFlowEngineFeatureSharedFormNote', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WorkFlowEngineFeatureSharedFormNote />);
    expect(baseElement).toBeTruthy();
  });
});
