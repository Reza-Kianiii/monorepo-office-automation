import { render } from '@testing-library/react';

import WorkFlowEngineFeatureTrackingFilterDynamicComponent from './workflow-engine-feature-tracking-filter-dynamic-component';

describe('WorkFlowEngineFeatureTrackingFilterDynamicComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <WorkFlowEngineFeatureTrackingFilterDynamicComponent />
    );
    expect(baseElement).toBeTruthy();
  });
});
