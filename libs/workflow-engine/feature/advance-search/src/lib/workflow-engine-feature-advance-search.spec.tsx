import { render } from '@testing-library/react';

import WorkFlowEngineFeatureAdvanceSearch from './workflow-engine-feature-advance-search';

describe('WorkFlowEngineFeatureAdvanceSearch', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WorkFlowEngineFeatureAdvanceSearch />);
    expect(baseElement).toBeTruthy();
  });
});
