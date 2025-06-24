import { render } from '@testing-library/react';

import WorkFlowEngineFeatureSharedDialogProcessInformation from './workflow-engine-feature-shared-dialog-process-information';

describe('WorkFlowEngineFeatureSharedDialogProcessInformation', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <WorkFlowEngineFeatureSharedDialogProcessInformation />
    );
    expect(baseElement).toBeTruthy();
  });
});
