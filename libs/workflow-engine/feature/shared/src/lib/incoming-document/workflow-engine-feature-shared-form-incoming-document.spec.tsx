import { render } from '@testing-library/react';

import WorkFlowEngineFeatureSharedFormIncominDocument from './workflow-engine-feature-shared-form-incoming-document';

describe('WorkFlowEngineFeatureSharedFormIncominDocument', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <WorkFlowEngineFeatureSharedFormIncominDocument />
    );
    expect(baseElement).toBeTruthy();
  });
});
