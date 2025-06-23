import { render } from '@testing-library/react';

import WorkFlowEngineFeatureSharedFormOutPutDocument from './workflow-engine-feature-shared-form-output-document';

describe('WorkFlowEngineFeatureSharedFormOutPutDocument', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <WorkFlowEngineFeatureSharedFormOutPutDocument />
    );
    expect(baseElement).toBeTruthy();
  });
});
