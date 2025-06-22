import { render } from '@testing-library/react';

import WorkFlowEngineFeatureTranking from './workflow-engine-feature-tranking';

describe('WorkFlowEngineFeatureTranking', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WorkFlowEngineFeatureTranking />);
    expect(baseElement).toBeTruthy();
  });
});
