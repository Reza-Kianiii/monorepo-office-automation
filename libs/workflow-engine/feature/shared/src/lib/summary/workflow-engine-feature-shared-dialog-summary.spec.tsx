import { render } from '@testing-library/react';

import WorkFlowEngineFeatureSharedDialogSummary from './workflow-engine-feature-shared-dialog-summary';

describe('WorkFlowEngineFeatureSharedDialogSummary', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <WorkFlowEngineFeatureSharedDialogSummary />
    );
    expect(baseElement).toBeTruthy();
  });
});
