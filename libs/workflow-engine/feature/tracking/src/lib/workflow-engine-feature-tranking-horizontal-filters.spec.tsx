import { render } from '@testing-library/react';

import WorkFlowEngineFeatureTrankingHorizontalFilters from './workflow-engine-feature-tranking-horizontal-filters';

describe('WorkFlowEngineFeatureTrankingHorizontalFilters', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <WorkFlowEngineFeatureTrankingHorizontalFilters />
    );
    expect(baseElement).toBeTruthy();
  });
});
