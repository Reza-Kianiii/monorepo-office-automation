import { render } from '@testing-library/react';

import WorkFlowEngineFeatureInboxFilterDynamicComponent from './workflow-engine-feature-inbox-filter-dynamic-component';

describe('WorkFlowEngineFeatureInboxFilterDynamicComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <WorkFlowEngineFeatureInboxFilterDynamicComponent />
    );
    expect(baseElement).toBeTruthy();
  });
});
