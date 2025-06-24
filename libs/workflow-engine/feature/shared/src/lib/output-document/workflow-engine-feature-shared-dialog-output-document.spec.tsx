import { render } from '@testing-library/react';

import WorkFlowEngineFeatureSharedDialogOutPutDocument from './workflow-engine-feature-shared-dialog-output-document';

describe('WorkFlowEngineFeatureSharedDialogOutPutDocument', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <WorkFlowEngineFeatureSharedDialogOutPutDocument />
    );
    expect(baseElement).toBeTruthy();
  });
});
