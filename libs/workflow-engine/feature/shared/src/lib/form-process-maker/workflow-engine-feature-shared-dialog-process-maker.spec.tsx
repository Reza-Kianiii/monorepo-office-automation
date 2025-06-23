import { render } from '@testing-library/react';

import WorkFlowEngineFeatureSharedDialogProcessMaker from './workflow-engine-feature-shared-dialog-process-maker';

describe('WorkFlowEngineFeatureSharedDialogProcessMaker', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <WorkFlowEngineFeatureSharedDialogProcessMaker />
    );
    expect(baseElement).toBeTruthy();
  });
});
