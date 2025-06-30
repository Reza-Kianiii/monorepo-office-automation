import { render } from '@testing-library/react';

import WorkFlowEngineFeatureProcessesForm from './workflow-engine-feature-processes-form';

describe('WorkFlowEngineFeatureProcessesForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WorkFlowEngineFeatureProcessesForm />);
    expect(baseElement).toBeTruthy();
  });
});
