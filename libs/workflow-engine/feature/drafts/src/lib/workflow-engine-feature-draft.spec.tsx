import { render } from '@testing-library/react';

import WorkFlowEngineFeatureDraft from './workflow-engine-feature-draft';

describe('WorkFlowEngineFeatureDraft', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WorkFlowEngineFeatureDraft />);
    expect(baseElement).toBeTruthy();
  });
});
