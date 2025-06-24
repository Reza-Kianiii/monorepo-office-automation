import { render } from '@testing-library/react';

import WorkFlowEngineFeatureSharedFormProcessMaker from './workflow-engine-feature-shared-form-process-maker';

describe('WorkFlowEngineFeatureSharedFormProcessMaker', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <WorkFlowEngineFeatureSharedFormProcessMaker />
    );
    expect(baseElement).toBeTruthy();
  });
});
