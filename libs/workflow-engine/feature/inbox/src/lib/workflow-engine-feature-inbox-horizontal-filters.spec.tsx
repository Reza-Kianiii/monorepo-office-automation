import { render } from '@testing-library/react';

import WorkFlowEngineFeatureInboxHorizontalFilter from './workflow-engine-feature-inbox-horizontal-filters';

describe('WorkFlowEngineFeatureInboxHorizontalFilter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <WorkFlowEngineFeatureInboxHorizontalFilter />
    );
    expect(baseElement).toBeTruthy();
  });
});
