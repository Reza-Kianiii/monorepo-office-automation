import { render } from '@testing-library/react';

import WorkFlowEngineFeatureProcessessAutocomplete from './workflow-engine-feature-processes-autocomplete';

describe('WorkFlowEngineFeatureProcessessAutocomplete', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <WorkFlowEngineFeatureProcessessAutocomplete />
    );
    expect(baseElement).toBeTruthy();
  });
});
