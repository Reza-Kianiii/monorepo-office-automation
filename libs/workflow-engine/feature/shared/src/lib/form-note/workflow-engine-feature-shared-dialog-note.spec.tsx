import { render } from '@testing-library/react';

import WorkFlowEngineFeatureSharedDialogNote from './workflow-engine-feature-shared-dialog-note';

describe('WorkFlowEngineFeatureSharedDialogNote', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WorkFlowEngineFeatureSharedDialogNote />);
    expect(baseElement).toBeTruthy();
  });
});
