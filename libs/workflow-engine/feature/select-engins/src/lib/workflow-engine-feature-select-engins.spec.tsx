import { render } from '@testing-library/react';

import WorkFlowEngineFeatureSelectEngins from './workflow-engine-feature-select-engins';

describe('WorkFlowEngineFeatureSelectEngins', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WorkFlowEngineFeatureSelectEngins />);
    expect(baseElement).toBeTruthy();
  });
});
