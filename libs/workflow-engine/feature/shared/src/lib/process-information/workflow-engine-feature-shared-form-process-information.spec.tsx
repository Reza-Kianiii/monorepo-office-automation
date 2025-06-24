import { render } from '@testing-library/react';

import WorkFlowEngineFeatureSharedFormProcessInformation from './workflow-engine-feature-shared-form-process-information';

describe('WorkFlowEngineFeatureSharedFormProcessInformation', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <WorkFlowEngineFeatureSharedFormProcessInformation />
    );
    expect(baseElement).toBeTruthy();
  });
});
