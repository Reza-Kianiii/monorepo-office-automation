import { render } from '@testing-library/react';

import WorkFlowEngineFeatureSharedDialogIncomingDocument from './workflow-engine-feature-shared-dialog-incoming-document';

describe('WorkFlowEngineFeatureSharedDialogIncomingDocument', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <WorkFlowEngineFeatureSharedDialogIncomingDocument />
    );
    expect(baseElement).toBeTruthy();
  });
});
