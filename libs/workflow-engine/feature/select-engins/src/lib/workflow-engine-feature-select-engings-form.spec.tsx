import { render } from '@testing-library/react';

import WorkFlowEngineFeatureSelectEnginsForm from './workflow-engine-feature-select-engings-form';

describe('WorkFlowEngineFeatureSelectEnginsForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WorkFlowEngineFeatureSelectEnginsForm />);
    expect(baseElement).toBeTruthy();
  });
});
